import authorizedRequest from './authorizedRequest .service';


const statsSpotify = async (endpoint: string, accessToken: string, setAccessToken: Function) => {
  try {
    const config = {
      method: "get",
      url: endpoint,
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

export default statsSpotify;