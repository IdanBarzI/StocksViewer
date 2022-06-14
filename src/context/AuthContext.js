import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import useStickyState from "../hooks/use-sticky-state";
import { SettingsContextProvider } from "./SettingsContext";

const AuthContext = React.createContext({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null, "user");
  const [token, setToken] = useStickyState(null, "token");
  const navigate = useNavigate();

  const logout = () => {
    return auth.signOut();
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
      if (user) {
        navigate(`/dashboard`, { replace: true });
      } else {
        navigate(`/`, { replace: true });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <SettingsContextProvider>
      <AuthContext.Provider
        value={{
          user,
          setUser: setUser,
          setUser: setUser,
          token,
          setToken: setToken,
          login: login,
          logout: logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </SettingsContextProvider>
  );
};

export default AuthContext;
