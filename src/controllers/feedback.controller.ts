import { Request, Response } from "express"
import feedBackModel from '../models/feedback.model';
import User from "../models/student.model";

const feedBackTeacher = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = req.user;
        const { _id } = await User.findOne({ email: user.email });
        const teacherId = req.params.teacherId;
        const feedbackData = req.body;
        await new feedBackModel({ instructor: teacherId, ...feedbackData, student: _id }).save();
        return res.send({ message: "Feedback sent" })
    }
    catch (err) {
        return res.status(500).send({ message: err })
    }
}

const editFeedbackTeacher = async (req: Request, res: Response) => {
    try {
        const feedbackData = req.body;
        await feedBackModel.updateOne({ _id: req.feedBackId }, feedbackData);
        return res.send({ message: "Feedback Updated" });
    }
    catch (err) {
        return res.status(500).send({ message: err });
    }
}

const deleteFeedbackTeacher = async (req: Request, res: Response) => {
    try {
        await feedBackModel.deleteOne({ _id: req.feedBackId });
        res.status(200).send({ message: "feedback deleted" })
    }
    catch (err) {
        return res.status(500).send({ message: err });
    }
}

export { feedBackTeacher, editFeedbackTeacher, deleteFeedbackTeacher };