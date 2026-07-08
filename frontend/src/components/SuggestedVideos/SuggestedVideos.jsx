import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SuggestedVideos.css";

import { getAllVideos } from "../../services/videoServices";

function SuggestedVideos({ currentVideoId }) {
  const [videos, setVideos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await getAllVideos();

        const filteredVideos = data.filter(
          (video) => video._id !== currentVideoId,
        );

        setVideos(filteredVideos);
      } catch (error) {
        console.log(error);
      }
    }

    fetchVideos();
  }, [currentVideoId]);

  return (
    <div className="suggested-videos">
      {videos.map((video) => (
        <div
          key={video._id}
          className="suggested-video"
          onClick={() => navigate(`/watch/${video._id}`)}
        >
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="suggested-thumbnail"
          />

          <div className="suggested-info">
            <h4>{video.title}</h4>

            <p>{video.channel?.channelName || "Unknown Channel"}</p>

            <p>{video.views} views</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuggestedVideos;
