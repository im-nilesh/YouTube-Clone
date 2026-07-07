import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../UploadVideo/UploadVideo.css";

import { getVideo, updateVideo } from "../../services/videoServices";

function EditVideo() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
    videoUrl: "",
    category: "",
  });

  useEffect(() => {
    async function fetchVideo() {
      try {
        const video = await getVideo(id);

        setFormData({
          title: video.title,
          description: video.description,
          thumbnailUrl: video.thumbnailUrl,
          videoUrl: video.videoUrl,
          category: video.category,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, [id]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await updateVideo(id, formData);

      alert("Video updated successfully");

      navigate(-1);
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
    }
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="upload-page">
      <form className="upload-form" onSubmit={handleSubmit}>
        <h2>Edit Video</h2>

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
          placeholder="Video URL"
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

        <button type="submit">Update Video</button>
      </form>
    </div>
  );
}

export default EditVideo;
