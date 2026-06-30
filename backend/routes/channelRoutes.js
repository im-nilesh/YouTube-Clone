import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import createChannel from "../controllers/channelController.js";

const router = express.Router();

router.post("/channel", authMiddleware, createChannel);

export default router;
