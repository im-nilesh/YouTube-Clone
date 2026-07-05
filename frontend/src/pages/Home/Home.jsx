import "./Home.css";

import FilterBar from "../../components/FilterBar/FilterBar";
import VideoCard from "../../components/VideoCard/VideoCard";

function Home() {
  return (
    <div className="home">
      <FilterBar />

      <section className="video-grid">
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg"
          duration="12:45"
          channelLogo="https://i.pravatar.cc/100"
          title="Building a Full Stack MERN YouTube Clone from Scratch"
          channelName="Code With Nilesh"
          views="125K"
          uploadedAt="2 days ago"
        />

        <VideoCard
          thumbnail="https://i.ytimg.com/vi/ysz5S6PUM-U/maxresdefault.jpg"
          duration="18:20"
          channelLogo="https://i.pravatar.cc/101"
          title="React Complete Course"
          channelName="Programming With React"
          views="540K"
          uploadedAt="1 week ago"
        />

        <VideoCard
          thumbnail="https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg"
          duration="45:10"
          channelLogo="https://i.pravatar.cc/102"
          title="MERN Stack Crash Course"
          channelName="Traversy Media"
          views="1.2M"
          uploadedAt="8 months ago"
        />

        <VideoCard
          thumbnail="https://i.ytimg.com/vi/f02mOEt11OQ/maxresdefault.jpg"
          duration="30:15"
          channelLogo="https://i.pravatar.cc/103"
          title="Node.js Authentication with JWT"
          channelName="Code Academy"
          views="312K"
          uploadedAt="3 weeks ago"
        />
      </section>
    </div>
  );
}

export default Home;
