import express from "express";
import Errormiddleware from './middleware/error.js'
import user from "./routes/userroute.js"
import comment from "./routes/commentroute.js"
import post from "./routes/postroute.js"

// import path from "path"
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use(cookieParser())

app.use('/api',user);
app.use("/api",post);
app.use("/api",comment)

// app.use(express.static(path.join(__dirname,"../itinertip/build")));
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"../itinertrip/build/index.html"))
// })

app.use(Errormiddleware)
export default app;