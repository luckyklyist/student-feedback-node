import express, { Request, Response } from 'express';
import { userSignUp, userLogin } from '../controllers/studnet.auth.controller';
import validateUserLogin from '../middlewares/validateAuth';
import checkFeedbackUser from '../controllers/checkfeedback.controller';
import validate from '../middlewares/validateSchema';
import signUpSceham from '../schema/user.schema';
import { feedBackTeacher, editFeedbackTeacher, deleteFeedbackTeacher } from '../controllers/feedback.controller';
import {teacherList, addTeacher, updateTecaher, deleteTeacher } from '../controllers/teacher.controller';
const router = express.Router();

interface UserData {
    username: string,
    email: string,
    password: string
}

router.post('/user/signup', validate(signUpSceham), userSignUp);

router.post('/user/login', userLogin);

// feedback to the teacher
router.post('/feedback/:teacherId', validateUserLogin, feedBackTeacher);

// edit the feedback
router.put('/feedback/:feedBackId', validateUserLogin, checkFeedbackUser, editFeedbackTeacher);

// delete the feedback
router.delete('/feedback/:feedBackId', validateUserLogin, checkFeedbackUser, deleteFeedbackTeacher);

// register a teacher
router.post('/addteacher',validateUserLogin, addTeacher);

// add the teacher from the excel sheet to the DB]
router.post('/addteacher/excel')

// list of all the teacher
router.get('/teachers',validateUserLogin,teacherList);

// update the teacher
router.put('/teacher/:teacherId',validateUserLogin, updateTecaher);

// delete the teacher
router.delete('/teacher/:teacherId',validateUserLogin, deleteTeacher);

// print the ranking of the teacher
router.get("/teacher/ranking")

// student chating group
router.get("/student/chat/:chatroom")

router.get('/healthcheckup', (_, res: Response) => {
    res.send({ message: "server running at the port 3001" })
})

export default router;