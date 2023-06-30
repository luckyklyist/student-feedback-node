import mongoose from "mongoose";
import bcrypt from 'bcrypt';

export interface userDocument extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    userType:string;
    comparePassword:(password:string)=>Promise<boolean>;
}

const userSchema = new mongoose.Schema<userDocument>({
    username: {
        type: String,
        required: true,
        unique: true,
        min:5,
        max:12
    },
    email: {
        type: String,
        requried: true,
        unique: true
    },
    userType:{
        type:String,
        enum:["Student","Teacher"],
        default:"Student"
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true })

userSchema.pre<userDocument>("save", async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const hashPassword = await bcrypt.hash(this.password, 10);
        this.password = hashPassword;
        next();
    }
    catch (err) {
        return next(err);
    }
})

userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    }
    catch (err) {
        console.log(err);
    }
}

const User = mongoose.model<userDocument>("user", userSchema);

export default User;