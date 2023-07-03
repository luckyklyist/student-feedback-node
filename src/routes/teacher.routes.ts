import express from 'express';
import validateUserLogin from '../middlewares/validateAuth';
import { teacherList, addTeacher, updateTeacher, deleteTeacher } from '../controllers/teacher.controller';

const router = express.Router();

router.post('/', validateUserLogin, addTeacher);
router.put('/:teacherId', validateUserLogin, updateTeacher);
router.delete('/:teacherId', validateUserLogin, deleteTeacher);
router.get('/list', validateUserLogin, teacherList);
router.get('/ranking');

export default router;
