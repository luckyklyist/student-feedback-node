import express from 'express';
import { userSignUp, userLogin } from '../controllers/studnet.auth.controller';
import validate from '../middlewares/validateSchema';
import signUpSchema from '../schema/user.schema';

const router = express.Router();

router.post('/signup', validate(signUpSchema), userSignUp);
router.post('/login', userLogin);

export default router;
