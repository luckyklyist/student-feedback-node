import { Request, Response } from "express"
import TeacherModel from '../models/teacher.model';

const teacherList = async (req: Request, res: Response): Promise<Response> => {
    try {
        const teacherList = await TeacherModel.find();
        return res.status(200).send({ message: teacherList })
    }
    catch (err) {
        return res.status(500).send({ message: err });
    }
}

const addTeacher = async (req: Request, res: Response): Promise<Response> => {
    try {
        const teacherData = req.body;
        const newTeacher = await new TeacherModel(teacherData).save();
        return res.send({ message: newTeacher })
    }
    catch (err) {
        return res.status(500).send({ message: err })
    }
}

const updateTecaher = async (req: Request, res: Response): Promise<Response> => {
    try {
        const teacherId = req.params.teacherId;
        const teacherExist = await TeacherModel.findOne({ _id: teacherId });
        if (teacherExist) {
            const teacherData = req.body;
            await TeacherModel.updateOne({ _id: teacherId }, { ...teacherData, _id: teacherId });
            const teacherUp = await TeacherModel.findOne({_id:teacherId});
            return res.send({ message: teacherUp })
        }
        return res.send({ message: "teacher dose not exist" })
    }
    catch (err) {
        return res.status(500).send({ message: err })
    }
}

const deleteTeacher = async (req: Request, res: Response): Promise<Response> => {
    try {
        const teacherId = req.params.teacherId;
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

export { teacherList, addTeacher, updateTecaher, deleteTeacher };