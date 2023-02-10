const express=require("express");

const { studentRouter } = require("./Routes/students.route");
const { teacherRouter } = require("./Routes/teachers.route")
const {logger}=require("./Middlewares/logger.middlewarw")
const app = express();
app.use(express.json())

app.use(logger)
app.use("/students", studentRouter);
app.use("/teachers", teacherRouter)

app.get("/",(req,res)=>{
    console.log('Home');
    res.send('Home');
})

app.listen(8080,()=>{
    console.log('server is over 8080');
})