import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";




import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

import { connectDB } from "./lib/db.js";
const app = express();
dotenv.config();


const PORT = process.env.PORT || 5001
app.use(express.json());

app.listen(PORT, ()=>{
    connDb();
    console.log("app is running on port:", PORT)
  })