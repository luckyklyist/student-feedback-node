import { NextFunction, Request,Response } from 'express';


const checkAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const user=req.user;
        if (user.role==="admin"){
            next()
        }
        return res.send({message:"permission denied"})
    }
    catch(err){
        return res.send({message:err});
    }

}