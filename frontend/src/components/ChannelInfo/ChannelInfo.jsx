//JSX File to display the channel info section

import "./ChannelInfo.css";

import { MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md";

import { useAuth } from "../../context/AuthContext";
import { likeVideo, dislikeVideo } from "../../services/videoServices";

function ChannelInfo({ video, onVideoUpdate }) {
  const { user } = useAuth();

  const hasLiked = Boolean(user) && video.likedBy?.includes(user._id);
  const hasDisliked = Boolean(user) && video.dislikedBy?.includes(user._id);

  async function handleLike() {
    if (!user) {
      alert("Please sign in to like this video");
      return;
    }

    try {
      const updatedVideo = await likeVideo(video._id);

      onVideoUpdate((prev) => ({
        ...prev,
        likes: updatedVideo.likes,
        dislikes: updatedVideo.dislikes,
        likedBy: updatedVideo.likedBy,
        dislikedBy: updatedVideo.dislikedBy,
      }));
    } catch (error) {
      alert(error.response?.data?.message || "Failed to like video");
    }
  }

  async function handleDislike() {
    if (!user) {
      alert("Please sign in to dislike this video");
      return;
    }

    try {
      const updatedVideo = await dislikeVideo(video._id);

      onVideoUpdate((prev) => ({
        ...prev,
        likes: updatedVideo.likes,
        dislikes: updatedVideo.dislikes,
        likedBy: updatedVideo.likedBy,
        dislikedBy: updatedVideo.dislikedBy,
      }));
    } catch (error) {
      alert(error.response?.data?.message || "Failed to dislike video");
    }
  }

  return (
    <section className="channel-info">
      <div className="channel-left">
        <img src={video.channel.logo} alt="channel" className="channel-image" />

        <div>
          <h4 className="channel-title">{video.channel.channelName}</h4>
          {video.channel.subscribers} subscribers
        </div>
      </div>

      <div className="channel-right">
        <button className="subscribe-btn">Subscribe</button>

        <button
          className={`action-btn ${hasLiked ? "active" : ""}`}
          onClick={handleLike}
        >
          <MdThumbUpOffAlt />
          <span>{video.likes}</span>
        </button>

        <button
          className={`action-btn ${hasDisliked ? "active" : ""}`}
          onClick={handleDislike}
        >
          <MdThumbDownOffAlt />
          <span>{video.dislikes}</span>
        </button>
      </div>
    </section>
  );
}

export default ChannelInfo;
