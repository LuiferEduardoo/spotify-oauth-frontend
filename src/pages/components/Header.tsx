import { useContext, useState } from "react";

import stylesHeaderDashboard from "../../assets/header.module.css";
import {
  AuthContext,
  AuthContextType,
} from "../../providers/AuthContext.provider";
import { removeTokenCookie } from "../../services/token.service";
import SpotifyAuthConsent from "./SpotifyAuthConsent";

import stylesHeaderLading from "../../assets/landing.module.css";

const API_URL = import.meta.env.VITE_API;

const header: React.FC = () => {
  const { accessToken, setAccessToken } = useContext(
    AuthContext
  ) as AuthContextType;

  const [showConsentModal, setShowConsentModal] = useState(false);

  const onLogout = () => {
    removeTokenCookie("access_token");
    setAccessToken("");
  };

  const handleConnect = () => {
    // Solo se ejecuta después de aceptar los términos
    window.location.href = `${API_URL}/login`;
  };
  return (
    <header className={stylesHeaderDashboard["transparent-header"]}>
      {!accessToken && (
        <button
          onClick={() => setShowConsentModal(true)}
          className={stylesHeaderLading["login-button"]}
        >
          Login to Spotify
        </button>
      )}
      {accessToken && (
        <button
          className={stylesHeaderDashboard["logout-button"]}
          onClick={onLogout}
        >
          Log out
        </button>
      )}

      {showConsentModal && (
        <SpotifyAuthConsent
          onClose={() => setShowConsentModal(false)}
          onAgree={handleConnect}
        />
      )}
    </header>
  );
};

export default header;
