import styles  from "../../assets/landing.module.css";
import stylesHeader from "../../assets/header.module.css";

const API_URL = import.meta.env.VITE_API;

const header: React.FC = () => {
  const handleLogin = async () => {
    window.location.href = `${API_URL}/login`;
  };
  return (
    <header className={stylesHeader['transparent-header']}>
      <button onClick={handleLogin} className={styles['login-button']}>
        Login to Spotify
      </button>
    </header>
  );
};

export default header;