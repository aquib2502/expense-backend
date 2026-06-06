import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.DB_URI, {
            dbName: process.env.DB_NAME
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed", error);
    }
};


export default connectDb;

