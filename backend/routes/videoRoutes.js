import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { uploadVideo } from "../controllers/videoController.js";

const router = express.Router();

router.post("/video", authMiddleware, uploadVideo);

export default router;
