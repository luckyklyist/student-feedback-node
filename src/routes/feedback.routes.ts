import express from 'express';
import validateUserLogin from '../middlewares/validateAuth';
import checkFeedbackUser from '../controllers/checkfeedback.controller';
import { feedBackTeacher, editFeedbackTeacher, deleteFeedbackTeacher } from '../controllers/feedback.controller';

const router = express.Router();

router.post('/:teacherId', validateUserLogin, feedBackTeacher);
router.put('/:feedBackId', validateUserLogin, checkFeedbackUser, editFeedbackTeacher);
router.delete('/:feedBackId', validateUserLogin, checkFeedbackUser, deleteFeedbackTeacher);

export default router;
