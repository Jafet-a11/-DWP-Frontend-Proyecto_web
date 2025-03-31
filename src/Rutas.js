import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import ProfilePage from "./Pages/PerfilPage/PerfilPage";
import HomePage from "./Pages/HomePage/HomePage";
import ComicsPage from "./Pages/ComicsPage/ComicsPage";
import PersonajesPage from "./Pages/PersonajesPage/PersonajesPage";
import PeliculasPage from "./Pages/PeliculasPage/PeliculasPage";
import InfoPersonajes from "./Pages/PersonajesPage/InfoPersonajes/InfoPersonajes";
import InfoComics from "./Pages/ComicsPage/InfoComics/InfoComics";
import DashboardHome from"./Pages/Dashboard/DashboardHome";
import DashboardPersonajes from"./Pages/Dashboard/DashboardPersonajes";
import DashboardPeliculas from"./Pages/Dashboard/DashboardPeliculas";
import DashboardComics from"./Pages/Dashboard/DashboardComics";
import NotFoundPage from "./Pages/NotFound/NotFound"; // Nueva página 404

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
        <Route path="/Personajes/InfoPersonajes/:id" element={<InfoPersonajes />} />
        <Route path="/Comics/InfoComics/:id" element={<InfoComics />} />
        <Route path="/DashboardHome" element={<DashboardHome />} />
        <Route path="/DashboardPersonajes" element={<DashboardPersonajes />} />
        <Route path="/DashboardPeliculas" element={<DashboardPeliculas />} />
        <Route path="/DashboardComics" element={<DashboardComics />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Ruta 404 */}
      </Routes>
    </Router>
  );
};

export default Rutas;
