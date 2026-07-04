import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  uploadVideo,
  getAllVideos,
  getVideo,
  updateVideo,
  deleteVideo,
} from "../controllers/videoController.js";

const router = express.Router();

router.post("/video", authMiddleware, uploadVideo);

router.get("/videos", getAllVideos);

router.get("/video/:id", getVideo);

router.put("/video/:id", authMiddleware, updateVideo);

router.delete("/video/:id", authMiddleware, deleteVideo);

export default router;
