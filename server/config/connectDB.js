import mongoose from 'mongoose';

const connectDB = async (req, res) =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/TaskmanagerDB`);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;