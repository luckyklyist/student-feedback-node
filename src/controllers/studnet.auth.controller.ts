import { Request,Response } from "express";
import User from "../models/student.model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from 'config';

interface userData{
    user:string,
    email:string,
    password:string
}

const userSignUp = async (req:Request, res:Response):Promise<Response> => {
    try {
        const userData:userData = req.body;
        console.log(userData);
        const checkUser = await User.findOne({ email: userData.email });
        console.log(checkUser, "check user")
        if (checkUser) {
            return res.status(300).send({ message: "user already exists" });
        }
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).send({ message: "user successfully created" })
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "error" });
    }
}

const userLogin = async (req:Request, res:Response):Promise<Response> => {
    try {
        const userData:userData = req.body;
        const user=await User.findOne({email:userData.email});
        const checkPassword=await user.comparePassword(userData.password);
        if(checkPassword){
            const token=jwt.sign(userData,config.get<string>("jwtSecretKey"));
            return res.status(201).send({message:`${token}`});
        }        
        return res.send({message:"wrong credentials"})
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "error" });

    }
}

export  {userSignUp,userLogin};