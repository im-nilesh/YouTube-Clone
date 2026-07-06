import Video from "../models/Video.js";
import Channel from "../models/Channel.js";

//controller for uploading the video
export async function uploadVideo(req, res) {
  try {
    const data = req.body;
    const id = req.user.id;
    const channel = await Channel.findOne({
      owner: id,
    });
    if (!channel) {
      return res.status(404).json({ message: "Channel not found" });
    }
    data.channel = channel._id;
    const video = new Video(data);
    await video.save();
    return res.status(201).json({
      message: "Video Uploaded Successfully",
      video,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

//controller for fetching all the videos
export async function getAllVideos(req, res) {
  try {
    const videos = await Video.find().populate("channel");

    return res.status(200).json({
      videos,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

//controller for fetching one video
export async function getVideo(req, res) {
  try {
    const id = req.params.id;

    const video = await Video.findById(id).populate("channel");

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    return res.status(200).json({
      video,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

//controller for updating video
export async function updateVideo(req, res) {
  try {
    const data = req.body;
    const id = req.params.id;
    const userId = req.user.id;
    const channel = await Channel.findOne({ owner: userId });
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }
    if (!channel) {
      return res.status(404).json({
        message: "Channel not found",
      });
    }
    if (video.channel.toString() !== channel._id.toString()) {
      return res.status(403).json({
        message: "User not authorized",
      });
    }
    const updatedVideo = await Video.findByIdAndUpdate(id, data, { new: true });
    return res.status(200).json({
      message: "Video Updated Successfully",
      video: updatedVideo,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

//controller for deleting the video
export async function deleteVideo(req, res) {
  try {
    const id = req.params.id;
    const userId = req.user.id;
    const channel = await Channel.findOne({ owner: userId });
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }
    if (!channel) {
      return res.status(404).json({
        message: "Channel not found",
      });
    }
    if (video.channel.toString() !== channel._id.toString()) {
      return res.status(403).json({
        message: "User not authorized",
      });
    }
    const deletedVideo = await Video.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Video Deleted Successfully",
      video: deletedVideo,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function searchVideos(req, res) {
  try {
    const title = req.query.title;
    const videos = await Video.find({
      title: { $regex: title, $options: "i" },
    });
    if (videos.length === 0) {
      return res.status(404).json({
        message: "Videos not found",
      });
    }
    return res.status(200).json({
      message: "Video Found",
      videos: videos,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function filterVideos(req, res) {
  try {
    const category = req.query.category;
    const videos = await Video.find({
      category,
    });
    if (videos.length === 0) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    return res.status(200).json({
      message: "Videos fetched successfully",
      videos,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function likeVideo(req, res) {
  try {
    const videoId = req.params.id;
    const userId = req.user.id;

    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    const alreadyLiked = video.likedBy.some((id) => id.toString() === userId);

    if (alreadyLiked) {
      return res.status(400).json({
        message: "You have already liked this video",
      });
    }

    const alreadyDisliked = video.dislikedBy.some(
      (id) => id.toString() === userId,
    );

    if (alreadyDisliked) {
      video.dislikedBy = video.dislikedBy.filter(
        (id) => id.toString() !== userId,
      );
    }

    video.likedBy.push(userId);

    video.likes = video.likedBy.length;
    video.dislikes = video.dislikedBy.length;

    await video.save();

    return res.status(200).json({
      message: "Video liked successfully",
      video,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function dislikeVideo(req, res) {
  try {
    const videoId = req.params.id;
    const userId = req.user.id;

    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    const alreadyDisliked = video.dislikedBy.some(
      (id) => id.toString() === userId,
    );

    if (alreadyDisliked) {
      return res.status(400).json({
        message: "You have already disliked this video",
      });
    }

    const alreadyLiked = video.likedBy.some((id) => id.toString() === userId);

    if (alreadyLiked) {
      video.likedBy = video.likedBy.filter((id) => id.toString() !== userId);
    }

    video.dislikedBy.push(userId);

    video.likes = video.likedBy.length;
    video.dislikes = video.dislikedBy.length;

    await video.save();

    return res.status(200).json({
      message: "Video disliked successfully",
      video,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
