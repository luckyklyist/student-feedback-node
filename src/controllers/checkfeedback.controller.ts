import { Request, Response, NextFunction } from "express";
import User from "../models/student.model";
import feedBackModel from "../models/feedback.model";

const checkFeedbackUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;
        const feedBackId = req.params.feedBackId;
        const { _id } = await User.findOne({ email: user.email });
        const feedBack = await feedBackModel.findOne({ _id: feedBackId });
        console.log(feedBack?.student, "id", _id)

        if (feedBack?.student && feedBack.student.toString() === _id.toString()) {
            req.feedBackId=feedBack._id;
            next();
        }
    }
    catch (err) {
        return res.status(500).send(err);
    }
}
export default checkFeedbackUser;

