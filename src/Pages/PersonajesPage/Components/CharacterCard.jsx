import React from "react";
import { Card } from "antd";
import "../Personajes.css"; // Importa el archivo CSS

const CharacterCard = ({ character }) => {
  return (
    <Card
      className="trapezoid-bottom-card"
      style={{
        width: 165,
        marginBottom: 16,
        backgroundColor: "black",
        color: "white",
        border: "12px solid black",
        borderRadius: "4px 4px 0 0",
      }}
      cover={
        <img
          src={character.Imagen} // Ajusta el campo de la API
          alt={character.Nombre}
          style={{ height: 130, objectFit: "cover" }}
        />
      }
    >
      <Card.Meta
         title={
          <span style={{ color: "white", display: "block", minHeight: "40px", textAlign: "center" }}>
            {character.Nombre}
          </span>
        }
      />
    </Card>
  );
};

export default CharacterCard;
