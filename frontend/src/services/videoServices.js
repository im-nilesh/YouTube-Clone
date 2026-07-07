import api from "../api/axios";

export async function getAllVideos() {
  const response = await api.get("/videos");
  return response.data.videos;
}

export async function getVideo(id) {
  const response = await api.get(`/video/${id}`);
  return response.data.video;
}

export async function searchVideos(title) {
  const response = await api.get(`/videos/search?title=${title}`);
  return response.data.videos;
}

export async function filterVideos(category) {
  const response = await api.get(`/videos/filter?category=${category}`);
  return response.data.videos;
}

export async function uploadVideo(videoData) {
  const token = localStorage.getItem("token");

  const response = await api.post("/video", videoData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
