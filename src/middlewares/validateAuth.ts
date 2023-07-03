import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';

const validateUserLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authToken = req.headers.authorization;
    
    if (!authToken) {
      return res.status(401).json({ error: 'Missing authorization header' });
    }
    
    const bearerToken = authToken.split(' ')[1];
    
    if (!bearerToken) {
      return res.status(401).json({ error: 'Missing bearer token' });
    }
    
    const validateUser = jwt.verify(bearerToken, config.get<string>('jwtSecretKey'));
    
    if (validateUser.email) {
      req.user = validateUser;
      next();
    } else {
      return res.status(401).json({ error: 'Invalid email in bearer token' });
    }
  } catch (err) {
    return res.status(401).json({ error: 'Invalid bearer token' });
  }
};

export default validateUserLogin;
