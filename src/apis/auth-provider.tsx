import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const AuthContext = createContext("auth");

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const setToken = (newToken : string) => {
    setToken_(newToken);
  };  

  const contextValue = useMemo(() => ({
    token,setToken
  }), [token])
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  return useContext(AuthContext);
}
export default AuthProvider;