import express from 'express';
import userRoutes from './user.routes';
import feedbackRoutes from './feedback.routes';
import teacherRoutes from './teacher.routes';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/teacher', teacherRoutes);

// Other routes
router.get('/student/chat/:chatroom');
router.get('/healthcheckup', (_, res) => {
  res.send({ message: "Server running at port 3001" });
});

export default router;
