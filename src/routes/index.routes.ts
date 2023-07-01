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

// feedback ot the teacher
router.post('/feedback/:teacherID');

// edit the feedback
router.put('/feedback/:teacherID')

// delete the feedback
router.put('/feedback/:teacherID')

// register a teacher
router.post('/addteacher');

// add the teacher from the excel sheet to the DB]
router.post('/addteacher/excel')

// list of all the teacher
router.get('/teachers')

// update the teacher
router.put('/teacher/update/:teacherID')

// delete the teacher
router.delete('/teacher/remove/:teacherID')

// print the ranking of the teacher
router.get("/teacher/ranking")

// student chating group
router.get("/student/chat/:chatroom")

router.get('/healthcheckup', (_, res: Response) => {
    res.send({ message: "server running at the port 3001" })
})

export default router;