import express, { Request, Response } from 'express';
import { userSignUp, userLogin } from '../controllers/studnet.auth.controller';
import validateUserLogin from '../middlewares/validateAuth';
import validate from '../middlewares/validateSchema';
import signUpSceham from '../schema/user.schema';
const router = express.Router();

interface UserData {
    username: string,
    email: string,
    password: string
}

router.post('/user/signup',validate(signUpSceham), userSignUp);

router.post('/user/login', userLogin);

router.post('/teacher', validateUserLogin, (req: Request, res: Response) => {
    if(req.user){
        const user:UserData=req.user;
        return res.send({user});
    }
})

router.get('/healthcheckup', (_, res: Response) => {
    res.send({ message: "server running at the port 3001" })
})

export default router;