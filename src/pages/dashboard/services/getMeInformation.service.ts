import axios from 'axios';

const getMeInformation = async (accessToken: string) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getMeInformation;