import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    verifyOtp: {
        type: String,
        default: 0
    },
    verifyOtpExpiresAt: {
        type: Number,
        default: 0
    },
    resetOtp:{
        type: String,
        default: 0
    },
    resetOtpExpiresAt:{
        type: Number,
        default: 0
    }
});

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model.user || mongoose.model('User', userSchema);
const tasks = mongoose.model.task || mongoose.model('Task', taskSchema);

export { User, tasks };