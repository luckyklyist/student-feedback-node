import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './utils/connect';
import config from 'config';

const app=express();
const PORT=config.get<number>("port");

connectDB();

app.get('/',(_,res)=>{
    res.send({message:"server running"})
})

app.get('/',(_,res)=>{
    res.send({message:"server running"})
})

app.listen(PORT,()=>console.log(`App listening at the port ${PORT}`))