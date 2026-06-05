import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "./config/config";
import { ApiError } from "./errors/api.error";
import { apiRouter } from "./routes/api.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({ status, message });
});

process.on("unhandledRеejection", (err) => {
    console.error("Unhandled Rejection:", err);
});

const dbConnection = async (): Promise<void> => {
    let dbCon = false;

    while (!dbCon) {
        try {
            await mongoose.connect(config.mongoUri);
            dbCon = true;
            console.log("MongoDB connected");
        } catch (e) {
            console.error("MongoDB connection failed, retrying in 5s...", e);
            await new Promise((res) => setTimeout(res, 5000));
        }
    }
};

const start = async () => {
    try {
        await dbConnection();
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    } catch (e) {
        console.error("Failed to start server", e);
    }
};

start();
