import mongoose from "mongoose";

export interface feedBack extends mongoose.Document{
    instructor: string;
    rating: Number;
    comments: Number;
}

const feedbackSchema = new mongoose.Schema<feedBack>({
    instructor: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    comments: {
        type: String,
        required: true
    }
})

const feedBackModel = mongoose.model("feedback", feedbackSchema);
export default feedBackModel;