import dotenv from "dotenv";
dotenv.config();

export const config = {
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGO_URI || "mongodb+srv://test:test@cluster0.abeasts.mongodb.net/nodejs-express",
};
