import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import connectDB from "./database/db.js";

import User from "./models/User.js";
import Channel from "./models/Channel.js";
import Video from "./models/Video.js";
import Comment from "./models/Comment.js";

import users from "./seed/users.js";
import channels from "./seed/channels.js";
import videos from "./seed/videos.js";
import comments from "./seed/comments.js";

async function seedDatabase() {
  try {
    await connectDB();

    console.log("Connected to MongoDB");

    await Comment.deleteMany();
    await Video.deleteMany();
    await Channel.deleteMany();
    await User.deleteMany();

    console.log("Old data removed");

    // ================= USERS =================

    const createdUsers = await User.insertMany(users);

    console.log("Users Seeded");

    const userMap = {};

    createdUsers.forEach((user) => {
      userMap[user.email] = user._id;
    });

    // ================= CHANNELS =================

    const formattedChannels = channels.map((channel) => ({
      channelName: channel.channelName,
      description: channel.description,
      logo: channel.logo,
      banner: channel.banner,
      subscribers: channel.subscribers,
      owner: userMap[channel.ownerEmail],
    }));

    const createdChannels = await Channel.insertMany(formattedChannels);

    console.log("Channels Seeded");

    const channelMap = {};

    createdChannels.forEach((channel, index) => {
      channelMap[channels[index].ownerEmail] = channel._id;
    });

    // ================= VIDEOS =================

    const formattedVideos = videos.map((video) => ({
      title: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      videoUrl: video.videoUrl,
      category: video.category,
      views: video.views,
      channel: channelMap[video.ownerEmail],
    }));

    const createdVideos = await Video.insertMany(formattedVideos);

    console.log("Videos Seeded");

    const videoMap = {};

    createdVideos.forEach((video) => {
      videoMap[video.title] = video._id;
    });

    // ================= COMMENTS =================

    const formattedComments = comments.map((comment) => ({
      comment: comment.comment,
      user: userMap[comment.ownerEmail],
      video: videoMap[comment.videoTitle],
    }));

    await Comment.insertMany(formattedComments);

    console.log("Comments Seeded");

    console.log("Database Seeded Successfully ✅");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

seedDatabase();
