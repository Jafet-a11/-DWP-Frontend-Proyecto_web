import React from "react";
import { Card } from "antd";

const ComicCard = () => {
  return (
    <Card
      style={{
        width: 250,
        height: 320,
        borderRadius: "15px",
        border: "1px solid black", // Contorno negro
      }}
      bodyStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>Comic</div>
    </Card>
  );
};

export default ComicCard;
