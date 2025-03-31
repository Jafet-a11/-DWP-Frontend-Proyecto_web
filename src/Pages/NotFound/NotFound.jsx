import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Layout } from "antd";
import Header from "../../Layouts/headear2";
import Foooter from "../../Layouts/footer";
import { Content } from "antd/es/layout/layout";
import "./NotFound.css";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{
      minHeight: "100vh",
      position: "relative",
      backgroundImage: "url('/404.png')",
      backgroundSize: "100% 85%", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column"
    }}>
      <Header />
      <Content style={{ 
        padding: "20px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        color: "white", 
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)", // Para mejorar la visibilidad del texto
      }}>
        <div style={{
          textAlign: "center",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <h1 style={{ fontSize: "80px", margin: "0" }}>404</h1>
          <h2 style={{ marginBottom: "20px" }}>Página no encontrada</h2>
          <p>Lo sentimos, la página que buscas no existe.</p>
          <Button className="button2" onClick={() => navigate("/Home")} style={{ marginTop: "20px" }}>
            Volver al Inicio
          </Button>
        </div>
      </Content>
      <Foooter />
    </Layout>
  );
};
export default NotFound;