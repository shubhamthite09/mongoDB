const express=require("express");
const teacherRouter=express.Router();
const fs=require("fs");
const app=express();

app.use(express.json());
teacherRouter.get("/",(req,res)=>{
    let data=fs.readFileSync("./db.json",{encoding:"utf-8"});
    let parsed=JSON.parse(data)
    console.log(parsed.teachers);
    res.send("Data is in terminal")
})

teacherRouter.get("/:empID",(req,res)=>{
    let data=fs.readFileSync("./db.json",{encoding:"utf-8"});
    let parsed=JSON.parse(data)
    console.log(req.params.empID)
    let fildat=parsed.teachers.filter(el=>{
        return(req.params.empID==el.emp_id)
    })
    console.log(fildat)
    res.send("Data is in terminal")
})
teacherRouter.delete("/:empID",(req,res)=>{
    let data=fs.readFileSync("./db.json",{encoding:"utf-8"});
    let parsed=JSON.parse(data)
    console.log(req.params.empID)
    let fildat=parsed.teachers.filter(el=>{
        return(req.params.empID!=el.emp_id)
    })
   // console.log(fildat)
    parsed.teachers=fildat;
    fs.writeFileSync("./db.json", JSON.stringify(parsed));
    res.send("Data has been updated")
})



teacherRouter.post("/addteacher",(req,res)=>{
    let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
    console.log(data)
    let parsed = JSON.parse(data)

    parsed.teachers.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(parsed));

    res.send("Data has been updated")
})

module.exports={
    teacherRouter
}