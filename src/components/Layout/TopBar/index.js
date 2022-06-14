import React from "react";
import Toggle from "../../../UiKit/Toggle";
import { useSettings } from "../../../context/SettingsContext";
import { useAuth } from "../../../context/AuthContext";

import "./index.scss";

const TopBar = () => {
  const { onThemeSwitch, theme } = useSettings();
  const { logout, setUser, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {}
  };

  return (
    <div className="topbar">
      <Toggle toggled={!theme} onClick={onThemeSwitch} />
      {user && (
        <button className="login-headers" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default TopBar;
