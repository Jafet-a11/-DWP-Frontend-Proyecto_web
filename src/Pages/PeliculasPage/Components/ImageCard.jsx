import React from 'react';
import { Card } from 'antd';

const ImageCard = () => {
  return (
    <Card
      style={{
        width: 150, // Ajusta el ancho según tus necesidades
        height: 200, // Ajusta la altura según tus necesidades
        marginBottom: 16,
      }}
      bodyStyle={{ padding: 0 }} // Elimina el padding del cuerpo de la tarjeta
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff', // Fondo blanco para la imagen
          border: '1px solid #d9d9d9', // Borde gris claro
        }}
      />
     <div>Pelicula </div> 
    </Card>
  );
};

export default ImageCard;