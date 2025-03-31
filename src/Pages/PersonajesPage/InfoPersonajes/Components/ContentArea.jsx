import React from 'react';
import { Row, Col } from 'antd';
import CharacterCard from './CharacterCard';
import MapCard from './MapCard';

const ContentArea = ({ personaje }) => {
  // Obtener la cadena de ubicación
  const { Ubicacion } = personaje;

  // Convertir la cadena en un objeto con lat y lng
  const parseCoordinates = (ubicacion) => {
    if (ubicacion) {
      const regex = /Latitud: ([\d.-]+), Longitud: ([\d.-]+)/;
      const match = ubicacion.match(regex);
      if (match) {
        return {
          lat: parseFloat(match[1]),
          lng: parseFloat(match[2]),
        };
      }
    }
    return null;
  };

  const coordinates = parseCoordinates(Ubicacion);  // Convierte la cadena en un objeto

  return (
    <Row gutter={[16, 16]} align="top">
      <Col xs={20} sm={5}>
        <CharacterCard personaje={personaje} />
      </Col>
      <Col xs={20} sm={10}>
        <div>
          <h2 style={{ backgroundColor: '#99003d', color: 'white', padding: '5px' }}>Historia</h2>
          <p>{personaje.Historia}</p>
        </div>
      </Col>
      <Col xs={24} sm={6} style={{ display: 'flex', justifyContent: 'center', marginLeft: 24 }}>
        <MapCard Ubicacion={coordinates} />
      </Col>
    </Row>
  );
};

export default ContentArea;
