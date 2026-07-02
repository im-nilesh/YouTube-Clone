import Video from "../models/Video.js";
import Channel from "../models/Channel.js";

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
