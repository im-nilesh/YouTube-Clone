import api from "../api/axios";

export async function getComments(videoId) {
  const response = await api.get(`/comment/${videoId}`);
  return response.data.comments;
}

export async function addComment(videoId, comment) {
  const token = localStorage.getItem("token");

  const response = await api.post(
    `/comment/${videoId}`,
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

  const response = await api.delete(`/comment/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.comment;
}
