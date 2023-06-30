import express from 'express';
import {userSignUp,userLogin} from '../controllers/user.controller';

const router=express.Router();

router.post('/user/signup',userSignUp);

router.post('/user/login',userLogin);

router.get('/healthcheckup', (_, res) => {
    res.send({ message: "server running at the port 3001"})
})

export default router;