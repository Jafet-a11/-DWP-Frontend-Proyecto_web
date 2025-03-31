import React from "react";
import { Card, Row, Col } from "antd";

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <Row gutter={[16, 16]} justify="center">
      {images.map((movie, index) => (
        <Col
          key={index}
          xs={24}  // 1 por fila en móviles
          sm={12}  // 2 por fila en tablets pequeñas
          md={8}   // 3 por fila en tablets grandes
          lg={6}   // 4 por fila en laptops
          xl={4}   // 5 por fila en pantallas grandes
        >
           <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px", }} >
          <Card
            hoverable
            style={{ width: 200, borderRadius: "8px" }}
            cover={
              <img
                src={movie.Imagen}
                alt={movie.Nombre}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  mixBlendMode: "multiply",
                  borderRadius: "8px",
                  transition: "opacity 0.3s",
                  opacity: 0.8, // Efecto de transparencia
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseOut={(e) => (e.currentTarget.style.opacity = 0.8)}
              />
            }
            onClick={() => onImageClick(index)}
            bodyStyle={{ padding: 0 }}
          />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ImageGrid;
