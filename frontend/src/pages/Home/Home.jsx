import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Home.css";

import FilterBar from "../../components/FilterBar/FilterBar"; //updated
import VideoCard from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context/VideoContext";
import {
  getAllVideos,
  searchVideos,
  filterVideos,
} from "../../services/videoServices";

function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const { selectedCategory } = useVideo();
  console.log(selectedCategory);

  useEffect(() => {
    async function fetchVideos() {
      try {
        let data = [];

        if (search) {
          console.log("Category:", selectedCategory);
          data = await searchVideos(search);
        } else if (selectedCategory !== "All") {
          console.log("Category:", selectedCategory);
          data = await filterVideos(selectedCategory);
        } else {
          console.log("Category:", selectedCategory);
          data = await getAllVideos();
        }

        setVideos(data || []);
      } catch (error) {
        console.log(error);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [search, selectedCategory]);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="home">
      <FilterBar />

      <section className="video-grid">
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoCard
              key={video._id}
              id={video._id}
              thumbnail={video.thumbnailUrl}
              title={video.title}
              channelName={video.channel?.channelName}
              views={video.views}
              uploadedAt={new Date(video.createdAt).toLocaleDateString()}
            />
          ))
        ) : (
          <div className="empty-state">
            <h2>No videos found</h2>
            <p>Try searching for something else.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
