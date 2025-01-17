import React from 'react';

const Landing: React.FC = () => {
  const handleLogin = () => {
  };

  return (
    <button onClick={handleLogin} style={buttonStyle}>
      Login to Spotify
    </button>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#1DB954',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Landing;