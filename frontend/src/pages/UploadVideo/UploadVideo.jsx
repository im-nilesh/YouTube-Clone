import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./UploadVideo.css";

import { uploadVideo } from "../../services/videoServices";

function UploadVideo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
    videoUrl: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function convertToEmbedUrl(url) {
    if (url.includes("youtube.com/embed/")) {
      return url;
    }

    if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const videoData = {
        ...formData,
        videoUrl: convertToEmbedUrl(formData.videoUrl),
      };

      await uploadVideo(videoData);

      alert("Video uploaded successfully");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="upload-page">
      <form className="upload-form" onSubmit={handleSubmit}>
        <h2>Upload Video</h2>

        <input
          type="text"
          name="title"
          placeholder="Video Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="thumbnailUrl"
          placeholder="Thumbnail URL"
          value={formData.thumbnailUrl}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="videoUrl"
          placeholder="YouTube Video URL"
          value={formData.videoUrl}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option>Education</option>
          <option>Technology</option>
          <option>Gaming</option>
          <option>Music</option>
          <option>Sports</option>
          <option>Movies</option>
          <option>News</option>
          <option>Live</option>
          <option>Podcasts</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
}

export default UploadVideo;
