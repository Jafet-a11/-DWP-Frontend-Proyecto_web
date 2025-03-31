import React from 'react';
import { Card } from 'antd';
import "../../Personajes.css"; 

const CharacterCard = ({ personaje }) => {
  return (
    <Card
      className="trapezoid-bottom-card"
      style={{
        width: 165,
        marginBottom: 16,
        backgroundColor: "black",
        color: "white",
        border: "18px solid black",
        borderRadius: "4px 4px 0 0",
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          height: 150,
          backgroundImage: `url(${personaje.Imagen})`, // Mostrar la imagen del personaje
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div style={{ textAlign: 'center', marginTop: '30px' }}>{personaje.Nombre}</div>
    </Card>
  );
};

export default CharacterCard;
