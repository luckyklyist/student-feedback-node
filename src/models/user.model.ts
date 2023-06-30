import mongoose from "mongoose";
import bcrypt from 'bcrypt';

export interface userDocumet extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        requried: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true })

userSchema.pre("save", async function (next) {
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

const User = mongoose.model("user", userSchema);

export default User;