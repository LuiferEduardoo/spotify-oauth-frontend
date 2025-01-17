import React, { createContext, useState, ReactNode } from "react";

import { getTokenCookie } from "../services/token.service";

export interface AuthContextType {
  accessToken: string | null;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    getTokenCookie("access_token") || null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <AuthContext.Provider
      value={{ accessToken, isLoading, setIsLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};