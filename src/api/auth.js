import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Updated to match backend URL

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/sign-in`, {
      username: credentials.username, // Corrected to use username
      password: credentials.password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/sign-up`, {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      fullName: userData.name, // Added fullName parameter
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};