import {
  // Children,
  createContext,
  useContext,
  // useEffect,
  useMemo,
  useState,
} from "react";

export const AuthContext = createContext("auth");

import { ReactNode } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const setToken = (newToken : string) => {
    setToken_(newToken);
  };  

  const contextValue = useMemo(() => ({
    token,setToken
  }), [token])
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): string {
  return useContext(AuthContext);
}
export default AuthProvider;