import api from "../api/axios";

export async function getComments(videoId) {
  const response = await api.get(`/video/${videoId}/comments`);
  return response.data.comments;
}

export async function addComment(videoId, comment) {
  const token = localStorage.getItem("token");

  const response = await api.post(
    `/video/${videoId}/comment`,
    { comment },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data.comment;
}

export async function updateComment(id, comment) {
  const token = localStorage.getItem("token");

  const response = await api.put(
    `/comment/${id}`,
    { comment },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data.comment;
}

export async function deleteComment(id) {
  const token = localStorage.getItem("token");

  await api.delete(`/comment/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
