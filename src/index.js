import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); 

import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERRR: ",error);
        throw error;
    })
app.listen(process.env.PORT||8000,()=>{
    console.log(`server is running on the port: ${process.env.PORT}`);
})
})
.catch((error)=>{
console.log("mongo db connection error!! ",error);
})