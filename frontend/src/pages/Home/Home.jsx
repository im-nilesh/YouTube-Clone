import { useEffect, useState } from "react";

import "./Home.css";

import FilterBar from "../../components/FilterBar/FilterBar";
import VideoCard from "../../components/VideoCard/VideoCard";

import { getAllVideos } from "../../services/videoServices";

function Home() {
  const [videos, setVideos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await getAllVideos();

        setVideos(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="home">
      <FilterBar />

      <section className="video-grid">
        {videos.map((video) => (
          <VideoCard
            key={video._id}
            thumbnail={video.thumbnailUrl}
            duration="12:30"
            channelLogo="https://i.pravatar.cc/100"
            title={video.title}
            channelName="Channel"
            views={video.views}
            uploadedAt="2 days ago"
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
