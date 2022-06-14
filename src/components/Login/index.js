import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import "./index.scss";
import "../../styles/_main.scss";

const Singup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { login } = useAuth();

  const haddleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await login(email, password);
    } catch (e) {
      setError("Failed to log in");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-headers">Sign in</h1>
      <h2 className="login-headers">Sign in and start managing your acount!</h2>
      <form className="login-form" onSubmit={(e) => haddleSubmit(e)}>
        <input
          placeholder="email"
          type="email"
          required
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          required
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="error">{error}</p>
        <button className="login-headers" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Singup;
