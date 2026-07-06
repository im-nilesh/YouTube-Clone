import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Watch.css";

import { getVideo } from "../../services/videoServices";
import ChannelInfo from "../../components/ChannelInfo/ChannelInfo";
import SuggestedVideos from "../../components/SuggestedVideos/SuggestedVideos";

function Watch() {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const data = await getVideo(id);
        setVideo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!video) {
    return <h2>Video not found</h2>;
  }

  return (
    <div className="watch-page">
      <div className="watch-left">
        <iframe
          className="video-player"
          src={video.videoUrl.replace("watch?v=", "embed/")}
          title={video.title}
          allowFullScreen
        ></iframe>

        <h2 className="watch-title">{video.title}</h2>

        <div className="watch-meta">
          <span>{video.views} views</span>
          <span>•</span>
          <span>{new Date(video.createdAt).toLocaleDateString()}</span>
        </div>

        <ChannelInfo video={video} />

        <p className="watch-description">{video.description}</p>
      </div>

      <div className="watch-right">
        <SuggestedVideos currentVideoId={id} />
      </div>
    </div>
  );
}

export default Watch;
