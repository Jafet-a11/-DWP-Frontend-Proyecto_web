import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography, Layout, notification } from "antd";
import { Link } from 'react-router-dom';
import Header from '../../Layouts/headear2';
import Foooter from '../../Layouts/footer';
import { Content } from "antd/es/layout/layout";
import { listenToUpdates, personajes, comics, peliculas } from "../../services/MarvelService"; // Importa SSE y APIs

const { Title } = Typography;

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener los datos de personajes, comics y peliculas
        const personajesData = await personajes();
        const comicsData = await comics();
        const peliculasData = await peliculas();

        // Asignar los datos correctamente
        setData([
          { title: "Personajes", path: "/Personajes", Imagen: personajesData[0]?.Imagen },
          { title: "Comics", path: "/Comics", Imagen: comicsData[0]?.Imagen },
          { title: "Películas", path: "/Peliculas", Imagen: peliculasData[0]?.Imagen },
        ]);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData(); // Obtener datos iniciales

    const eventSource = listenToUpdates((update) => {
      console.log("Nueva actualización:", update);
      notification.success({
        message: `Nueva actualización: ${update}`,
        duration: 20,
        closeIcon: <button>❌</button>,
      });

      fetchData(); // Volver a obtener datos cuando haya una actualización
    });

    return () => eventSource.close(); // Cierra SSE al desmontar el componente
  }, []);

  return (
    <Layout style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />
      <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Title level={2}>Informacion de Marvel</Title>
        </div>
        <Row gutter={[26, 26]} justify="center">
          {data.map((item, index) => (
            <Col key={index}>
              <Link to={item.path}>
                <Card
                  hoverable
                  style={{
                    width: 250,
                    height: 350,
                    position: "relative",
                    overflow: "hidden",
                  }}
                  cover={
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <img
                        src={item.Imagen}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "15px",
                          transition: "opacity 0.3s",
                          opacity: 0.8,
                          mixBlendMode: "multiply",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = 0.8)}
                      />
                    </div>
                  }
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#fff",
                      padding: "10px 15px",
                      borderRadius: "10px",
                    }}
                  >
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