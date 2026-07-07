import { useNavigate } from "react-router-dom";

import "./ChannelVideoCard.css";

function ChannelVideoCard({ video, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="channel-video-card">
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="channel-video-thumbnail"
      />

      <div className="channel-video-content">
        <h3>{video.title}</h3>

        <p>{video.views} views</p>

        <div className="channel-video-actions">
          <button
            className="edit-btn"
            onClick={() => navigate(`/edit-video/${video._id}`)}
          >
            Edit
          </button>

          <button className="delete-btn" onClick={() => onDelete(video._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChannelVideoCard;
