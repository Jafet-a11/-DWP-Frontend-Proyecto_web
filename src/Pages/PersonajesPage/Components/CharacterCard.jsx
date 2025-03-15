import React from "react";
import { Card } from "antd";
import "../Personajes.css"; // Importa el archivo CSS

const CharacterCard = ({ characterName }) => {
  return (
    <Card
      className="trapezoid-bottom-card" // Agrega una clase para aplicar el estilo
      style={{
        width: 165,
        marginBottom: 16,
        backgroundColor: "black",
        color: "white",
        border: "12px solid black", // Mantén el borde para la parte superior
        borderRadius: "4px 4px 0 0", // Redondea solo las esquinas superiores
      }}
      cover={
        <div
          style={{
            height: 120,
            backgroundColor: "#f0f0f0",
          }}
        />
      }
    >
      <Card.Meta
        title={<span style={{ color: "white" }}>{characterName}</span>}
      />
    </Card>
  );
};

export default CharacterCard;