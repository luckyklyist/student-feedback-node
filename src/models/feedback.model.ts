import mongoose, { ObjectId } from "mongoose";

export interface feedBack extends mongoose.Document {
    instructor: ObjectId;
    rating: Number;
    comments: Number;
    student: string,
    teacher: string
}

const feedbackSchema = new mongoose.Schema<feedBack>({
    instructor:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher"
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    comments: {
        type: String,
        required: true
    },
})

const feedBackModel = mongoose.model("feedback", feedbackSchema);
export default feedBackModel;