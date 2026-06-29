import dotenv from "dotenv";
dotenv.config();

import express from "express";
import "./database/db.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./database/db.js";

const app = express();
connectDB();

app.use(express.json());
app.use("/", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
