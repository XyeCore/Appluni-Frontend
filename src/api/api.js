import axios from 'axios';
import { isTokenExpired } from '../utils/jwtUtils';

// Support both possible env names and provide a same fallback 
const API_BASE_URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || '';

// Add Axios interceptor to include JWT token in all requests
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); 
    if (token) {
      if (isTokenExpired(token)) {
        console.warn('Token is expired. Removing from localStorage.');
        localStorage.removeItem('accessToken');
        return Promise.reject(new Error('Token expired. Please log in again.'));
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (credentials) => {
  try {
    console.log("API_BASE_URL:", API_BASE_URL);
    
    const response = await axios.post(`${API_BASE_URL}/api/v1/auth/sign-in`, {
      username: credentials.username,
      password: credentials.password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/auth/sign-up`, {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      fullName: userData.name,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Fetch applications from the backend API.
 * @param {string} userId - The ID of the user.
 * @param {number} page - The page number to fetch.
 * @param {number} size - The number of items per page.
 * @param {Array<string>} sort - Sorting criteria.
 * @returns {Promise<Object>} - The API response containing applications data.
 */
export const fetchApplications = async (userId) => { //, page = 0, size = 10, sort = 'string') => {
  try {
    console.log("Fetching applications with params:", { userId }); // Debugging log
    const response = await axios.get(`${API_BASE_URL}/api/v1/applications`, {
      params: { userId },
    });
    console.log("Response data:", response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error fetching applications:', error);
    throw error;
  }
};

/**
 * Method for starting a new application.
 * @param {Object} applicationData - The data for the new application.
 * @returns {Promise<Object>} - A placeholder response.
 */
export const startNewApplication = async (userId, programId = 'b9e91a7e-9850-4756-a5ab-545b832d39ff') => {
  try {
    console.log("Starting new application with params:", { userId, programId }); // Debugging log
    const url = `${API_BASE_URL}/api/v1/applications?userId=${userId}&programId=${programId}`; // Manually construct the URL
    const response = await axios.post(url, null); // Send the request with the constructed URL
    return response.data;
  } catch (error) {
    console.error('Error starting new application:', error);
    throw error.response?.data || error.message;
  }
};

/**
 * Placeholder method for deleting application.
 * @param {String} applicationId - The ID of the application to delete.
 * @returns {Promise<Object>} - A placeholder response.
 */
export const deleteApplication = async (applicationId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/v1/applications/${applicationId}`);  
    console.log("Deleting application with ID:", applicationId); // Debugging log
    
    return response.data;
  } catch (error) {
    console.error('Error deleting application: ', error);
    throw error.response?.data || error.message;
  }
};