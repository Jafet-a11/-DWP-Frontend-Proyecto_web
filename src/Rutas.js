import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import ProfilePage from "./Pages/PerfilPage/PerfilPage";
import HomePage from "./Pages/HomePage/HomePage";
import ComicsPage from "./Pages/ComicsPage/ComicsPage"
import PersonajesPage from "./Pages/PersonajesPage/PersonajesPage";
import PeliculasPage from "./Pages/PeliculasPage/PeliculasPage";
import InfoPersonajes from "./Pages/PersonajesPage/InfoPersonajes/InfoPersonajes";
import InfoComics from "./Pages/ComicsPage/InfoComics/InfoComics";
const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/LoginPage" />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/Perfil" element={<ProfilePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Comics" element={<ComicsPage />} />
        <Route path="/Personajes" element={<PersonajesPage />} />
        <Route path="/Peliculas" element={<PeliculasPage />} />
        <Route path="/Personajes/InfoPersonajes" element={<InfoPersonajes />} />
        <Route path="/Comics/InfoComics" element={<InfoComics />} />
      </Routes>
    </Router>
  );
};

export default Rutas;