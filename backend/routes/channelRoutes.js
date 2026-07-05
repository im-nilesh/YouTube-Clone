import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createChannel,
  getChannel,
  getAllChannels,
  getChannelVideos,
} from "../controllers/channelController.js";

const router = express.Router();

router.post("/channel", authMiddleware, createChannel);

router.get("/channel/:id", getChannel);

router.get("/channels", getAllChannels);

router.get("/channel/:id/videos", getChannelVideos);

export default router;
