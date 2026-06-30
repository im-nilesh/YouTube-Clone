import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./database/db.js";

import userRoutes from "./routes/userRoutes.js";
import channelRoutes from "./routes/channelRoutes.js";

const app = express();
connectDB();

app.use(express.json());
app.use("/", userRoutes);
app.use("/", channelRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
