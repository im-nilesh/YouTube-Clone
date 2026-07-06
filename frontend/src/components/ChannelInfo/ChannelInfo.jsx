import "./ChannelInfo.css";

import { MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md";

function ChannelInfo({ video }) {
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

        <button className="action-btn">
          <MdThumbUpOffAlt />
          <span>{video.likes}</span>
        </button>

        <button className="action-btn">
          <MdThumbDownOffAlt />
          <span>{video.dislikes}</span>
        </button>
      </div>
    </section>
  );
}

export default ChannelInfo;
