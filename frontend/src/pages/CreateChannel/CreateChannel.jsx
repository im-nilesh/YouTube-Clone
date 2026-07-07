import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CreateChannel.css";

import { createChannel } from "../../services/createChannelServices";

function CreateChannel() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    channelName: "",
    description: "",
    logo: "",
    banner: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      await createChannel(formData);

      alert("Channel created successfully");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create channel");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-channel-page">
      <form className="create-channel-form" onSubmit={handleSubmit}>
        <h2>Create Channel</h2>

        <input
          type="text"
          name="channelName"
          placeholder="Channel Name"
          value={formData.channelName}
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
          name="logo"
          placeholder="Logo URL"
          value={formData.logo}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="banner"
          placeholder="Banner URL"
          value={formData.banner}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Channel"}
        </button>
      </form>
    </div>
  );
}

export default CreateChannel;
