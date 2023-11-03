import mongoose from 'mongoose';
require('dotenv').config();
import { app } from '../app';

const dbUrl: string = process.env.DB_URI || '';

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/react", {
            
        });
        console.log(`Database connected`);
    } catch (error) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
};

export default connectDB;
