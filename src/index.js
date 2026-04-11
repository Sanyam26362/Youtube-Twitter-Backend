import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";

dotenv.config({
    path: "./.env"
});

const app = express();

// Connect DB
connectDB()
.then(() => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running at PORT: ${PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB Connection failed", err);
});