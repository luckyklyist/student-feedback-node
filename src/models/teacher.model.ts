import mongoose from "mongoose";

export interface teacherDocument extends mongoose.Document{
    name:string;
    email:string;
    password:string;
    feedBack:string[];
}

const teacherSchema=new mongoose.Schema<teacherDocument>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    feedBack:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"feedback"
        }
    ],
})

const TeacherModel=mongoose.model("teacher",teacherSchema);
export default TeacherModel;