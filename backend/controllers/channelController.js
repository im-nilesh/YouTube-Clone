import Channel from "../models/Channel.js";

export async function createChannel(req, res) {
  try {
    const data = req.body;
    const existingChannel = await Channel.findOne({
      owner: req.user.id,
    });
    if (existingChannel) {
      return res.status(409).json({
        message: "Channel already exists",
      });
    }
    data.owner = req.user.id;
    const channel = new Channel(data);
    await channel.save();
    return res.status(201).json({
      message: "Channel Created",
      channel,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function getChannel(req, res) {
  try {
    const id = req.params.id;
    const channel = await Channel.findById(id);
    if (!channel) {
      return res.status(404).json({
        message: "Channel not found",
      });
    }
    return res.status(200).json({
      channel,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
