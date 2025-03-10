import authorizedRequest from './authorizedRequest .service';

const getMeInformation = async (accessToken: string, setAccessToken: Function) => {
  try {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/me`,
      headers : {
        Authorization: `Bearer ${accessToken}`,
      }
    }
    const response = await authorizedRequest(config, setAccessToken);
    return response;
  } catch (error) {
    throw error;
  }
};

export default getMeInformation;