import express from "express"
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/messageRoutes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/user",userRoutes)


// app.get("/",(req,res)=>{
//      // root routes http://localhost:5000
     
//      res.send("Ram Ram!");
//      });
     
     
app.listen(PORT,() =>{
          connectToMongoDB();
          console.log(`Server Running on Port ${PORT}`)
})