import { useContext } from "react";

import stylesHeaderDashboard from "../../assets/header.module.css";
import { AuthContext, AuthContextType } from "../../providers/AuthContext.provider";
import { removeTokenCookie } from "../../services/token.service";

import stylesHeaderLading  from "../../assets/landing.module.css";

const API_URL = import.meta.env.VITE_API;
  

const header: React.FC = () => {
  const { accessToken, setAccessToken  }= useContext(AuthContext) as AuthContextType;
  const onLogout = () => {
    removeTokenCookie('access_token');
    setAccessToken('');
  }

  const handleLogin = async () => {
    window.location.href = `${API_URL}/login`;
  };
  return (
    <header className={stylesHeaderDashboard['transparent-header']}>
      {!accessToken && (
        <button onClick={handleLogin} className={stylesHeaderLading['login-button']}>
          Login to Spotify
        </button>
      )}
      {accessToken && (
        <button className={stylesHeaderDashboard['logout-button']} onClick={onLogout}>
          Log out
        </button>
      )}
      
    </header>
  );
};

export default header;