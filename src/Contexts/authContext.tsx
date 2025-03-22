import React, { useState, createContext } from "react";

export interface UserDataProps {
  email: string;
}

export type AuthType = {
  userData: UserDataProps;
  setUserData: Function;
};

const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    return { email: "" };
  });

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
