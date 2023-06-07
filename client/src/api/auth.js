import axios from 'axios';

const API_BASE_URL = 'https://wger.de/api/v2/';

const authenticate = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/token/`, {
            username: username,
            password: password,
            });
            const accessToken = response.data.access;
            return accessToken;
    } catch (error) {
        console.log('Authentication failed:', error);
        throw error;
    }
};

const makeAuthenticatedRequest = async (endpoint, accessToken) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Authentication request failed:', error);
      throw error;
    }
  };

  export { authenticate, makeAuthenticatedRequest };