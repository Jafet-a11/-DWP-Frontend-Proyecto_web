import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/LoginPage" />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
};

export default Rutas;