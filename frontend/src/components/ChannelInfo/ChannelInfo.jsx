import "./ChannelInfo.css";

import { MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md";

function ChannelInfo({ video }) {
  return (
    <section className="channel-info">
      <div className="channel-left">
        <img
          src="https://i.pravatar.cc/150"
          alt="channel"
          className="channel-image"
        />

        <div>
          <h4 className="channel-title">Channel Name</h4>

          <p className="subscriber-count">10K subscribers</p>
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
