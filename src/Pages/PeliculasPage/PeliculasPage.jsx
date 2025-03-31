import React, { useState, useEffect } from 'react';
import { Layout, Spin, Typography } from 'antd';
import ImageGrid from './Components/ImageGrid';
import Pagination from './Components/Pagination';
import Header from '../../Layouts/headear'; // Importa el Header
import Foooter from '../../Layouts/footer';
import MovieModal from './Components/ModalInfo'; // Importa el componente MovieModal
import { peliculas } from "../../services/MarvelService";

const { Content } = Layout;
const { Title } = Typography;

function PeliculasPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [peliculasData, setPeliculasData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para la búsqueda
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [selectedMovie, setSelectedMovie] = useState(null); // Estado para almacenar los datos de la película seleccionada
  const imagesPerPage = 10;

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const data = await peliculas(); // Obtiene las películas desde la API
        setPeliculasData(data);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };

    fetchPeliculas();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredPeliculas = peliculasData.filter((pelicula) =>
    pelicula.Nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = filteredPeliculas.slice(startIndex, startIndex + imagesPerPage);

  const handleImageClick = (index) => {
    if (!filteredPeliculas || filteredPeliculas.length === 0 || !filteredPeliculas[index]) {
      console.error("No hay datos disponibles para la película seleccionada.");
      return;
    }

    const selectedMovieData = filteredPeliculas[index];

    const movieData = {
      title: selectedMovieData.Nombre,
      characters: selectedMovieData.Actores,
      releaseDate: selectedMovieData.Fecha,
      synopsis: selectedMovieData.Historia,
      director: selectedMovieData.Director,
      imageUrl: selectedMovieData.Imagen,
    };

    setSelectedMovie(movieData);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh', position: 'relative' }}>
      <Header setSearchQuery={handleSearch} />
      <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {peliculasData.length === 0 ? (
          <Spin size="large" />
        ) : (
          <>
            {filteredPeliculas.length === 0 && searchQuery ? (
              <Title level={4}>No se encontraron resultados para "{searchQuery}"</Title>
            ) : (
              <ImageGrid images={currentImages} onImageClick={handleImageClick} />
            )}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Pagination
                current={currentPage}
                total={filteredPeliculas.length}
                onChange={handlePageChange}
              />
            </div>
          </>
        )}
      </Content>
      <Foooter />
      <MovieModal visible={isModalVisible} onClose={handleCloseModal} movie={selectedMovie} />
    </Layout>
  );
}
export default PeliculasPage;