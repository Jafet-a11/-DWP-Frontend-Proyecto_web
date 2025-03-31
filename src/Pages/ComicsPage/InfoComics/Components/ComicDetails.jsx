import React, { useState } from 'react';
import { Typography, Button } from 'antd';
import ComicModal from './InfoModal'; // Importa el modal

const { Title, Text } = Typography;

const ComicDetails = ({ comic }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <Title level={2}>{comic.Nombre}</Title>
      <Text><strong>Historia:</strong> {comic.Historia}</Text><br />

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button 
          type="primary" 
          style={{ backgroundColor: '#99003d', borderColor: '#99003d' }}
          onClick={() => setIsModalVisible(true)} // Abre el modal
        >
          Más detalles
        </Button>
      </div>

      {/* Modal con detalles del cómic */}
      <ComicModal 
        visible={isModalVisible} 
        onClose={() => setIsModalVisible(false)} // Cierra el modal
        comic={{
          title: comic.Nombre,
          characters: comic.Autor,
          releaseDate: comic.Creacion,
          synopsis: comic.Descripcion,
          imageUrl: comic.Imagen
        }} 
      />
    </div>
  );
};

export default ComicDetails;
