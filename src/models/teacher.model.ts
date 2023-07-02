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
    }
})

const TeacherModel=mongoose.model("teacher",teacherSchema);
export default TeacherModel;