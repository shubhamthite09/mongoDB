const morgan=require("morgan");
const express=require("express");
const fs=require("fs");
const app = express();

const logger=(req,res,next)=>{
    app.use(morgan(':method :url :status - :total-time[digits]- :res[content-length] - :response-time ms  -  :date[web]  -:http-version'))
fs.appendFileSync("./logs.txt",`route :${req.url}  method: ${req.method}  user-Agent:${req.logger} \n`,{encoding:"utf-8"});
next()
}
module.exports={logger}