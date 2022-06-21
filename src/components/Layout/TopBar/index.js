import React, { useState } from "react";
import Toggle from "../../../UiKit/Toggle";
import { useSettings } from "../../../context/SettingsContext";
import { useAuth } from "../../../context/AuthContext";

import "./index.scss";
import { getCurrent } from "../../../firebase";

const TopBar = () => {
  const { onThemeSwitch, theme } = useSettings();
  const { logout, setUser, user } = useAuth();
  const [s, setS] = useState(0);
  getCurrent().then((r) => {
    setS(r);
  });
  console.log(s);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {}
  };

  return (
    <div className="topbar">
      <Toggle toggled={!theme} onClick={onThemeSwitch} />
      {user && (
        <div>
          <button className="login-headers" onClick={handleLogout}>
            Logout
          </button>
          <div>{s}</div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
