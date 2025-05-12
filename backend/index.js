import express from 'express';
import dotenv from 'dotenv';
import { connDb } from './db/connDb';

dotenv.config();

const PORT = process.env.PORT

const app = express();

app.listen(3001, ()=>{
    connDb();
    console.log('Server is running on port', PORT);
})