// CharacterCard.js
import React from 'react';
import { Card } from 'antd';
import "../../Personajes.css"; 
const CharacterCard = () => {
  return (
    <Card
    className="trapezoid-bottom-card" // Agrega una clase para aplicar el estilo
    style={{
      width: 165,
      marginBottom: 16,
      backgroundColor: "black",
      color: "white",
      border: "18px solid black", // Mantén el borde para la parte superior
      borderRadius: "4px 4px 0 0", // Redondea solo las esquinas superiores
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          height: 150,
            backgroundColor: "#f0f0f0",
          
        }}
      />
      <div style={{ textAlign: 'center', marginTop: '30px' }}>Personaje</div>
    </Card>
  );
};
export default CharacterCard;