import { NextFunction, Request,Response } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';

const validateUserLogin = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const authToken = req.headers.authorization;
        const bearerToken = authToken.split(' ')[1];
        const validateUser = jwt.verify(bearerToken, config.get<string>("jwtSecretKey"))
        console.log(validateUser);
        if (validateUser) {
            req.user = validateUser;
            next();
        }
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid bearer token' });
    }
}

export default validateUserLogin;