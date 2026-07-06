import api from "../api/axios";

export async function getComments(videoId) {
  const response = await api.get(`/video/${videoId}/comments`);
  return response.data.comments;
}

export async function addComment(videoId, comment, token) {
  const response = await api.post(
    `/video/${videoId}/comment`,
    { comment },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}

export async function updateComment(commentId, comment, token) {
  const response = await api.put(
    `/comment/${commentId}`,
    { comment },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}

export async function deleteComment(commentId, token) {
  const response = await api.delete(`/comment/${commentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
