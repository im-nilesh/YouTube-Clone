import api from "../api/axios";

export async function registerUser(userData) {
  const response = await api.post("/register", userData);
  return response.data;
}

export async function loginUser(userData) {
  const response = await api.post("/login", userData);
  return response.data;
}
