import React from 'react';
import { Row, Col } from 'antd';
import CharacterCard from './CharacterCard';
import MapCard from './MapCard';

const ContentArea = () => {
  return (
    <Row gutter={[16, 16]} align="top">
      <Col xs={20} sm={5}>
        <CharacterCard />
      </Col>
      <Col xs={20} sm={10}>
        <div>
          <h2 style={{ backgroundColor: '#99003d', color: 'white', padding: '5px' }}>Historia</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Col>
      <Col xs={24} sm={6} style={{ display: 'flex', justifyContent: 'center', marginLeft: 24 }}>
        <MapCard />
      </Col>
    </Row>
  );
};

export default ContentArea;
