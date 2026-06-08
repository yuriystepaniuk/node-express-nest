import dotenv from "dotenv";
dotenv.config();

interface IConfig {
    port: number | string;
    mongoUri: string;
    _JWT_ACCESS_SECRET: string;
    _JWT_REFRESH_SECRET: string;
    _JWT_ACCESS_LIFETIME: string;
    _JWT_REFRESH_LIFETIME: string;
}

export const config : IConfig = {
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGO_URI || "mongodb+srv://test:test@cluster0.abeasts.mongodb.net/nodejs-express",
    _JWT_ACCESS_SECRET: process.env._JWT_ACCESS_SECRET || "",
    _JWT_REFRESH_SECRET: process.env._JWT_REFRESH_SECRET || "",
    _JWT_ACCESS_LIFETIME: process.env._JWT_ACCESS_LIFETIME || "",
    _JWT_REFRESH_LIFETIME: process.env._JWT_REFRESH_LIFETIME || "",
};
