import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Channel.css";

import { getChannel, getChannelVideos } from "../../services/channelServices";

import VideoCard from "../../components/VideoCard/VideoCard";
import ChannelVideoCard from "../../components/ChannelVideoCard/ChannelVideoCard";
import { deleteVideo } from "../../services/videoServices";

function Channel() {
  const { id } = useParams();

  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const channelData = await getChannel(id);
        const videosData = await getChannelVideos(id);

        setChannel(channelData);
        setVideos(videosData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  async function handleDelete(videoId) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this video?",
    );

    if (!confirmDelete) return;

    try {
      await deleteVideo(videoId);

      setVideos((prev) => prev.filter((video) => video._id !== videoId));

      alert("Video deleted successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Delete failed");
    }
  }

  if (loading) return <h2>Loading...</h2>;

  if (!channel) return <h2>Channel not found</h2>;

  return (
    <div className="channel-page">
      <img
        src={channel.banner}
        alt={channel.channelName}
        className="channel-banner"
      />

      <div className="channel-header">
        <img
          src={channel.logo}
          alt={channel.channelName}
          className="channel-logo"
        />

        <div className="channel-content">
          <h1>{channel.channelName}</h1>

          <p className="channel-subs">{channel.subscribers} subscribers</p>

          <p className="channel-description">{channel.description}</p>
        </div>
      </div>

      <h2 className="videos-title">Videos</h2>

      <div className="channel-videos">
        {videos.map((video) => (
          <ChannelVideoCard
            key={video._id}
            video={video}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Channel;
