import { Request, Response } from "express"
import TeacherModel from '../models/teacher.model';

const addTeacher = async (req: Request, res: Response): Promise<Response> => {
    try {
        const teacherData=req.body;
        await new TeacherModel(teacherData).save();
        return res.send({ message: "Teacher added" })
    }
    catch (err) {
        return res.status(500).send({ message: err })
    }
}

export {addTeacher};