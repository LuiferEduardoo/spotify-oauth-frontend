import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Skeleton from "@mui/material/Skeleton";

import styles from "../../assets/profileCard.module.css";
import {
  AuthContext,
  AuthContextType,
} from "../../providers/AuthContext.provider";
import getMeInformation from "./services/getMeInformation.service";

const ProfileCard: React.FC = () => {
  const { accessToken, setAccessToken } = useContext(
    AuthContext
  ) as AuthContextType;
  const [isLoading, setIsLoading] = useState(true);
  const [meInformation, setMeInformation] = useState<any>();

  useEffect(() => {
    const callToAPI = async () => {
      const responseMeInformation = await getMeInformation(
        accessToken as string,
        setAccessToken
      );
      setMeInformation(responseMeInformation);
      setIsLoading(false);
    };

    callToAPI();
  }, []);
  return isLoading ? (
    <Skeleton variant="rounded" width={500} height={300} />
  ) : (
    <div className={styles["profile-card"]}>
      <div className={styles["profile-container"]}>
        {meInformation?.images[0]?.url ? (
          <img
            className={styles["profile-photo"]}
            src={meInformation.images[0].url}
            alt={`${name}'s profile`}
          />
        ) : (
          <div className={styles["profile-placeholder"]}>
            {meInformation?.display_name?.charAt(0).toUpperCase() || "N"}
          </div>
        )}
      </div>

      <h2
        className={styles["profile-name"]}
      >{`Hi ${meInformation?.display_name}!`}</h2>
      <p className={styles["profile-description"]}>
        You don't need to wait for your Spotify wrapped to be able to see what
        your changes and favorite artists are.
      </p>
    </div>
  );
};

export default ProfileCard;
