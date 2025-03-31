import React, { useState, useEffect } from "react";
import { Card, Row, Col, Layout, Spin, Typography } from "antd";
import HeaderComponent from '../../Layouts/headear';  // Modificado a HeaderComponent
import Foooter from '../../Layouts/footer';
import { Content } from "antd/es/layout/layout";
import CustomPagination from "./Components/CustomPagination";
import { Link } from 'react-router-dom';
import { comics } from "../../services/MarvelService"; // Importa la API

const { Title } = Typography;
const itemsPerPage = 10;

const ComicsGrid = () => {
  const [comicsData, setComicsData] = useState([]); // Estado para guardar los cómics
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const data = await comics(); // Obtiene los cómics desde la API
        setComicsData(data);
      } catch (error) {
        console.error("Error al obtener los cómics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filtrar cómics según el término de búsqueda
  const filteredComics = comicsData.filter((comic) =>
    comic.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra por nombre (ajusta según tu API)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedComics = filteredComics.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Layout style={{ minHeight: '100vh', position: 'relative' }}>
      <HeaderComponent setSearchQuery={setSearchTerm} /> {/* Agregado el prop para actualizar el término de búsqueda */}
      <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ textAlign: "center", padding: "20px" }}>
          {loading ? (
            <Spin size="large" />
          ) : (
            <>
              {/* Mensaje si no se encuentran resultados */}
              {filteredComics.length === 0 && searchTerm && !loading ? (
                <Title level={4}>No se encontraron resultados para "{searchTerm}"</Title>
              ) : (
                <Row gutter={[24, 24]} justify="center">
                  {displayedComics.map((comic) => (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }} key={comic.id}>
                      <Col xs={12} sm={8} md={6} lg={4}>
                        <Link to={`/Comics/InfoComics/${comic.id}`}> {/* URL dinámica */}
                          <Card
                            hoverable
                            cover={
                              <img
                                src={comic.Imagen} // Suponiendo que el campo de la API se llama "imagen"
                                alt={comic.Nombre}
                                style={{
                                  width: "100%",
                                  height: "100%", // Ajusta la imagen para que cubra la card
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                }}
                              />
                            }
                            style={{
                              width: 130,
                              height: 160, // Asegura que la imagen cubra todo
                              border: "1px solid black",
                              overflow: "hidden",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              padding: 0, // Elimina cualquier relleno que pudiera afectar la imagen
                            }}
                            bodyStyle={{ display: "none" }} // Oculta el contenido del cuerpo de la tarjeta
                          />
                        </Link>
                      </Col>
                    </div>
                  ))}
                </Row>
              )}
            </>
          )}
          {/* Paginación */}
          <CustomPagination currentPage={currentPage} totalItems={filteredComics.length} pageSize={itemsPerPage} onPageChange={handlePageChange} />
        </div>
      </Content>
      <Foooter />
    </Layout>
  );
};

export default ComicsGrid;
