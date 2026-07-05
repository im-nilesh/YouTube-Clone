import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  uploadVideo,
  getAllVideos,
  getVideo,
  updateVideo,
  deleteVideo,
  searchVideos,
  filterVideos,
  likeVideo,
  dislikeVideo,
} from "../controllers/videoController.js";

const router = express.Router();

router.post("/video", authMiddleware, uploadVideo);

router.get("/videos", getAllVideos);

router.get("/videos/search", searchVideos);

router.get("/videos/filter", filterVideos);

router.get("/video/:id", getVideo);

router.put("/video/:id", authMiddleware, updateVideo);

router.delete("/video/:id", authMiddleware, deleteVideo);

router.put("/video/:id/like", authMiddleware, likeVideo);

router.put("/video/:id/dislike", authMiddleware, dislikeVideo);

export default router;
