import { Request, Response } from "express"
import feedBackModel from '../models/feedback.model';

const feedBackTeacher = async (req: Request, res: Response): Promise<Response> => {
    try {
        const feedbackData=req.body;
        await new feedBackModel(feedbackData).save();
        return res.send({ message: "Feedback sent" })
    }
    catch (err) {
        return res.status(500).send({ message: err })
    }
}

export default feedBackTeacher;