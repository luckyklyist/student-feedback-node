import express from 'express';
import validateUserLogin from '../middlewares/validateAuth';
import { teacherList, addTeacher, updateTeacher, deleteTeacher } from '../controllers/teacher.controller';
import checkAdmin from '../middlewares/checkAdmin';

const router = express.Router();

router.post('/', validateUserLogin,checkAdmin, addTeacher);
router.put('/:teacherId', validateUserLogin,checkAdmin, updateTeacher);
router.delete('/:teacherId', validateUserLogin,checkAdmin, deleteTeacher);
router.get('/list', validateUserLogin,checkAdmin, teacherList);
router.get('/ranking');

export default router;
