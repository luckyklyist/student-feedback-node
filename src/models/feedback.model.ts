import mongoose, { ObjectId } from "mongoose";

export interface feedBack extends mongoose.Document {
    instructor: ObjectId;
    rating: Number;
    comment: Number;
    student: ObjectId,
    teacher: string,
}

const feedbackSchema = new mongoose.Schema<feedBack>({
    instructor:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
        required:true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    comment: {
        type: String,
        required: true
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true
    }
})

const feedBackModel = mongoose.model("feedback", feedbackSchema);
export default feedBackModel;