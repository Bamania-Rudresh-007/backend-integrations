import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_KEY)
            .then(() => {
                console.log("MongoDB connected successfully!!");
            })
    } catch (error) {
        console.error("MongoDB connecction error: ", error.message);
        process.exit(1);
    }
}

export default connectDB;