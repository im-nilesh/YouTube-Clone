import api from "../api/axios";

export async function createChannel(channelData) {
  const token = localStorage.getItem("token");

  const response = await api.post("/channel", channelData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getChannel(id) {
  const response = await api.get(`/channel/${id}`);
  return response.data.channel;
}

export async function getChannelVideos(id) {
  const response = await api.get(`/channel/${id}/videos`);
  return response.data.videos;
}
