import { NextFunction, Request, Response } from 'express';
import User from '../models/student.model';


const checkAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.user;
        const userCheck = await User.findOne({ email });
        console.log(userCheck?.userType)
        if (userCheck?.userType === "Admin") {
            console.log("user is admin");
            next();
        }
    }
    catch (err) {
        return res.send({ message: err });
    }

}
export default checkAdmin;