import Video from "../models/Video.js";
import Comment from "../models/Comment.js";

export async function addComment(req, res) {
  try {
    const data = req.body;
    const videoId = req.params.id;
    const userId = req.user.id;
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }
    data.user = userId;
    data.video = video._id;
    const comment = new Comment(data);
    await comment.save();
    return res.status(201).json({
      message: "Comment added Successfully",
      comment,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function getAllComments(req, res) {
  try {
    const videoId = req.params.id;
    const comments = await Comment.find({
      video: videoId,
    });
    return res.status(200).json({
      comments,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function updateComment(req, res) {
  try {
    const data = req.body;
    const commentId = req.params.id;
    const userId = req.user.id;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }
    if (comment.user.toString() !== userId) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }
    const updatedComment = await Comment.findByIdAndUpdate(commentId, data, {
      new: true,
    });
    return res.status(200).json({
      message: "Comment Updated successfully",
      updatedComment,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
