import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Update with your backend URL

const api = axios.create({
  baseURL: API_URL,
});

export const fetchFeed = async () => {
  const response = await api.get('/feed');
  return response.data;
};

export const fetchProfile = async (userId) => {
  const response = await api.get(`/profile/${userId}`);
  return response.data;
};

// Add more API methods as needed

export default api;
