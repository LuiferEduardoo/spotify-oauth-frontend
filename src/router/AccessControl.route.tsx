import React, { useContext } from "react";

import { AuthContext } from "../providers/AuthContext.provider";
import Dashboard from "../pages/dashboard";
import Landing from "../pages/landing";

interface AccessControl {
  redirectPath?: string;
}

const AccessControl: React.FC<AccessControl> = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { accessToken } = authContext;


  return accessToken ? <Dashboard /> : <Landing/>;
};

export default AccessControl;