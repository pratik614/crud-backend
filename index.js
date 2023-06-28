import express from "express"
import { connectDb } from "./database/data.js"
import router from "./routes/route.js";
import cors from "cors"
import bodyParser from "body-parser";

const app=express()
connectDb();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);
app.get("/",(req,res)=>{
    res.send("chalyo hai server")
})
app.listen(8000,()=>{
    console.log("server is created");
})