import { useContext } from "react";

import styles from "../../assets/header.module.css";
import { AuthContext, AuthContextType } from "../../providers/AuthContext.provider";
import { removeTokenCookie } from "../../services/token.service";


const header: React.FC = () => {
  const { setAccessToken  }= useContext(AuthContext) as AuthContextType;
  const onLogout = () => {
    removeTokenCookie('access_token');
    setAccessToken('');
  }
  return (
    <header className={styles['transparent-header']}>
      <button className={styles['logout-button']} onClick={onLogout}>
        Log out
      </button>
    </header>
  );
};

export default header;