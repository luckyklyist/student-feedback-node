import { Request, Response } from "express"
import feedBackModel from '../models/feedback.model';

const feedBackTeacher = async (req: Request, res: Response): Promise<Response> => {
    try {
        const teacherId = req.params.teacherID;
        const feedbackData = req.body;
        await new feedBackModel({ ...feedbackData, instructor: teacherId }).save();
        return res.send({ message: "Feedback sent" })
    }
    catch (err) {
        return res.status(500).send({ message: err })
    }
}

const editFeedbackTeacher = async (req: Request, res: Response) => {
    try {
        const teacherId = req.params.teacherID;
        const feedbackData = req.body;
        await feedBackModel.updateOne({...feedbackData,instructor:teacherId});
        return res.send({ message: "Feedback Updated" })
    }
    catch (err) {
        return res.status(500).send({ message: err });
    }
}

const deleteFeedbackTeacher=async(req:Request,res:Response)=>{
    try{
        const teacherId=req.params.teacherId;
        await feedBackModel.deleteOne({instructor:teacherId});
        res.status(200).send({message:"feedback deleted"})
    }
    catch(err){
        return res.status(500).send({ message: err });
    }
}

export { feedBackTeacher, editFeedbackTeacher ,deleteFeedbackTeacher};