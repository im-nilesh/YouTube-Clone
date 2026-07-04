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
