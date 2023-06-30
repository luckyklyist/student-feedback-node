import express from 'express';
import {userSignUp,userLogin} from '../controllers/user.controller';
import validateUserLogin from '../middlewares/validateAuth';
const router=express.Router();

router.post('/user/signup',userSignUp);

router.post('/user/login',userLogin);

router.post('/teacher',validateUserLogin,(req,res)=>res.send(req.user))

router.get('/healthcheckup', (_, res) => {
    res.send({ message: "server running at the port 3001"})
})

export default router;