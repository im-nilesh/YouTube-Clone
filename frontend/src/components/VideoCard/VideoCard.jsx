import "./VideoCard.css";

import { useNavigate } from "react-router-dom";

function VideoCard({
  id,
  thumbnail,
  duration,
  channelLogo,
  title,
  channelName,
  views,
  uploadedAt,
}) {
  const navigate = useNavigate();

  return (
    <article className="video-card" onClick={() => navigate(`/watch/${id}`)}>
      <div className="thumbnail-container">
        <img src={thumbnail} alt={title} className="video-thumbnail" />

        <span className="video-duration">{duration}</span>
      </div>

      <div className="video-info">
        <img src={channelLogo} alt={channelName} className="channel-avatar" />

        <div className="video-details">
          <h3 className="video-title">{title}</h3>

          <p className="channel-name">{channelName}</p>

          <p className="video-meta">
            {views} views • {uploadedAt}
          </p>
        </div>
      </div>
    </article>
  );
}

export default VideoCard;
