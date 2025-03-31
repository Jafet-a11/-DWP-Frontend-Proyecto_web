import React from "react";
import { Card } from "antd";

const ComicCard = ({ comic }) => {
  return (
    <Card
      style={{
        width: 250,
        height: 320,
        borderRadius: "15px",
        border: "1px solid black",
      }}
      cover={
        <img
          src={comic.Imagen}
          alt={comic.Nombre}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      }
    />
  );
};

export default ComicCard;
