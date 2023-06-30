import User from "../models/user.model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from 'config';

const userSignUp = async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData);
        const checkUser = await User.findOne({ email: userData.email });
        console.log(checkUser, "check user")
        if (checkUser) {
            return res.status(300).send({ message: "user already exists" });
        }
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).send({ message: "user sucessfully created" })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ message: "error" });
    }
}

const userLogin = async (req, res) => {
    try {
        const userData = req.body;
        const user=await User.findOne({email:userData.email});
        const checkPassword=await bcrypt.compare(userData.password,user.password);
        if(checkPassword){
            const token=jwt.sign(userData,config.get<string>("jwtSecretKey"));
            // req.headers.token=token;
            return res.status(201).send({message:`${token}`});
        }
        return res.send({message:"wrong credentials"})
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ message: "error" });

    }
}

export  {userSignUp,userLogin};