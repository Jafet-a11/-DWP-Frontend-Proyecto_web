// PersonajesPage.js
import React, { useState } from 'react';
import { Layout } from 'antd';
import ImageGrid from './Components/ImageGrid';
import Pagination from './Components/Pagination';
import Header from '../../Layouts/headear';
import Foooter from '../../Layouts/footer';
import MovieModal from './Components/ModalInfo'; // Importa el componente MovieModal

const { Content } = Layout;

function PersonajesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 10;
  const totalImages = 30; // Número total de imágenes
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [selectedMovie, setSelectedMovie] = useState(null); // Estado para almacenar los datos de la película seleccionada

  const images = Array.from({ length: totalImages });

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleImageClick = (index) => {
    // Simula la obtención de datos de la película basados en el índice (reemplaza con tus datos reales)
    const movieData = {
      title: `Película ${index + 1}`,
      characters: `Personaje ${index + 1}, Otro Personaje`,
      releaseDate: `2023-${(index % 12) + 1}-01`,
      synopsis: `Sinopsis de la película ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipisicing elit...`,
    };

    setSelectedMovie(movieData);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Header />
      <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ImageGrid images={currentImages} onImageClick={handleImageClick} /> {/* Pasa la función handleImageClick a ImageGrid */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Pagination
            current={currentPage}
            total={totalImages}
            onChange={handlePageChange}
          />
        </div>
      </Content>
      <Foooter />
      <MovieModal visible={isModalVisible} onClose={handleCloseModal} movie={selectedMovie} /> {/* Renderiza el MovieModal */}
    </Layout>
  );
}

export default PersonajesPage;