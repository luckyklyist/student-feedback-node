import { Request, Response } from "express"
import TeacherModel from '../models/teacher.model';

const addTeacher = async (req: Request, res: Response): Promise<Response> => {
    try {
        const teacherData = req.body;
        await new TeacherModel(teacherData).save();
        return res.send({ message: "Teacher added" })
    }
    catch (err) {
        return res.status(500).send({ message: err })
    }
}

const updateTecaher = async (req: Request, res: Response): Promise<Response> => {
    try {
        const teacherId = req.params;
        const teacherExist = await TeacherModel.findOne({ _id: teacherId });
        if (teacherExist) {
            const teacherData = req.body;
            await TeacherModel.updateOne({ _id: teacherId }, { ...teacherData, _id: teacherId });
            return res.send({ message: "teacher updated" })
        }
        return res.send({ message: "teacher dose not exist" })
    }
    catch (err) {
        return res.status(500).send({ message: err })
    }
}

const deleteTeacher = async (req: Request, res: Response): Promise<Response> => {
    try {
        const teacherId = req.params;
        const teacherExist = await TeacherModel.findOne({ _id: teacherId });
        if (teacherExist) {
            await TeacherModel.deleteOne({ _id: teacherId });
            return res.send({ message: "Teacher deleted" })
        }
        return res.send({ message: "teacher dose not exist" })

    }
    catch (err) {
        return res.send({ message: "teacher dose not exist" })
    }
}

export { addTeacher,updateTecaher,deleteTeacher };