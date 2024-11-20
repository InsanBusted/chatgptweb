import mongoose from "mongoose";

// Tambahkan tipe untuk fungsi
const connectionToDatabase = async (): Promise<void> => {
    try {
        // Pastikan `MongoURL` didefinisikan
        if (!process.env.MongoURL) {
            throw new Error("MongoURL is not defined in environment variables.");
        }

        await mongoose.connect(process.env.MongoURL);
        console.log("Connected to Database");
    } catch (err) {
        console.error("Database connection error:", err);
    }
};

export default connectionToDatabase;
