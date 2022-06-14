import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Layout from "./components/Layout";
import ProtectedRoute from "./UiKit/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={user === null ? <Login /> : <Navigate to="dashboard" />}
          />

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
