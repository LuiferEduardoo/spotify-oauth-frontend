import React from 'react';

import styles  from "../../assets/landing.module.css";

const API_URL = import.meta.env.VITE_API;

const Landing: React.FC = () => {
  const handleLogin = async () => {
    window.location.href = `${API_URL}/login`;
  };

  return (
    <div className={styles['container']}>
      <button onClick={handleLogin} className={styles['login-button']}>
        Login to Spotify
      </button>
    </div>
  );
};

export default Landing;