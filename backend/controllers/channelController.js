import Channel from "../models/Channel";

async function createChannel(req, res) {
  try {
    const data = req.body;

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
export default createChannel;
