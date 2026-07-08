import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./database/db.js";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import channelRoutes from "./routes/channelRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

const app = express();
await connectDB();

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.use("/", channelRoutes);
app.use("/", videoRoutes);
app.use("/", commentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
