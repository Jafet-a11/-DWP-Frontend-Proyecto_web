import React from "react";
import { Card, Row, Col, Typography, Layout } from "antd";
import { Link } from 'react-router-dom'; // Importa Link
import Header from '../../Layouts/headear';
import '../../App.css';
import Foooter from '../../Layouts/footer';
import { Content } from "antd/es/layout/layout";
const { Title } = Typography;

const data = [
  { title: "Personajes", path: "/Personajes" },
  { title: "Comics", path: "/Comics" },
  { title: "Películas", path: "/Peliculas" },
];

const HomePage = () => {
  return (
    <Layout style={{ minHeight: '100vh', position: 'relative' }}> {/* Añade position: 'relative' al Layout */}
      <Header />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          backgroundImage: 'url("/Hulk.jpg")', // Reemplaza con la ruta de tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1, // Coloca la imagen detrás del contenido
        }}
      />
      <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '25px' }}>
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Title level={2}>Imagen</Title>
        </div>
        <Row gutter={[16, 16]} justify="center">
          {data.map((item, index) => (
            <Col key={index}>
              <Link to={item.path}> {/* Usa Link para crear un enlace */}
                <Card
                  style={{
                    width: 300,
                    height: 300,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente para las cards
                    backdropFilter: 'blur(5px)', // Efecto de desenfoque para mejorar la legibilidad
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
                    {item.title}
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Content>
      <Foooter />
    </Layout>
  );
};

export default HomePage;