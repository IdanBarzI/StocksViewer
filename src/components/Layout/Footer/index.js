import React, { useContext } from "react";
import a from "../../../assets/Images/Login/Vectors.svg";
import AuthContext from "../../../context/AuthContext";

import "./index.scss";

const Fotter = () => {
  const { user } = useContext(AuthContext);
  return <div className="fotter">{!user && <img src={a} />}</div>;
};

export default Fotter;
