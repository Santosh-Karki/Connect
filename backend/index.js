import express from 'express';
import dotenv from 'dotenv';
import { connDb } from './db/connDb.js';

const app = express();
dotenv.config();


const PORT = process.env.PORT || 5001
app.use(express.json());

app.listen(PORT, (req, res)=>{
    connDb();
    console.log("app is running on port:", PORT)
  })