import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();
dotenv.config();


const PORT = process.env.PORT || 5001
app.use(express.json());

app.listen(PORT, ()=>{
    connDb();
    console.log("app is running on port:", PORT)
  })