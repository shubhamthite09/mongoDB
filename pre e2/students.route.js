const express = require("express");
const studentRouter = express.Router();
const fs = require("fs");
const app = express();
app.use(express.json())

studentRouter.get("/", (req, res) => {
    let data=fs.readFileSync("./db.json",{encoding:"utf-8"});
    let parsed=JSON.parse(data)
    console.log(parsed.students);
    res.send("Data is in terminal")
})
studentRouter.get("/:rollNo", (req, res) => {
    console.log(req.params.rollNo);
    let data=fs.readFileSync("./db.json",{encoding:"utf-8"});
    let parsed=JSON.parse(data)
   let fidata= parsed.students.filter(element=>{
    return(req.params.rollNo==element.roll_no)
   })
   console.log(fidata)
    res.send("Data is in terminal")
})
studentRouter.delete("/:rollNo", (req, res) => {
    console.log(req.params.rollNo);
    let data=fs.readFileSync("./db.json",{encoding:"utf-8"});
    let parsed=JSON.parse(data)
   let fidata= parsed.students.filter(element=>{
    return(req.params.rollNo!=element.roll_no)
   })
   parsed.students=fidata;
   fs.writeFileSync("./db.json", JSON.stringify(parsed));
    res.send("Data has been deleted")
})


studentRouter.post("/addstudent", (req, res) => {
    let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
    console.log(data)
    let parsed = JSON.parse(data)

    parsed.students.push(req.body);

    res.send(req.body)
    fs.writeFileSync("./db.json", JSON.stringify(parsed));

    res.send("Data has been added")
})

module.exports = { studentRouter }