import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  addComment,
  getAllComments,
  updateComment,
  deleteComment,
} from "../controllers/commentController.js";

const router = express.Router();

router.post("/video/:id/comment", authMiddleware, addComment);

router.get("/video/:id/comments", getAllComments);

router.put("/comment/:id", authMiddleware, updateComment);

router.delete("/comment/:id", authMiddleware, deleteComment);

export default router;
