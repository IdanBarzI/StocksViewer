import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { useSettings } from "../../context/SettingsContext";

import "./index.scss";

const Layout = () => {
  const { theme } = useSettings();
  return (
    <div className={`app ${theme ? "light" : "dark"}`}>
      <div className="themer page-background">
        <TopBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
