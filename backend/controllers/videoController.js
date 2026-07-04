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
    const videos = await Video.find();

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
    const video = await Video.findById(id);
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
