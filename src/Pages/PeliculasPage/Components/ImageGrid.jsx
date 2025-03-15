// ImageGrid.js
import React from 'react';
import { Row, Col } from 'antd';
import ImageCard from './ImageCard';

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <Row gutter={[16, 16]}>
      {images.map((_, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
          <div onClick={() => onImageClick(index)}> {/* Agrega el evento onClick */}
            <ImageCard />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ImageGrid;