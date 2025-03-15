// CharacterGrid.js
import React from 'react';
import { Row, Col } from 'antd';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom'; // Importa Link

const CharacterGrid = ({ characters }) => {
  return (
    <Row gutter={[16, 16]}>
      {characters.map((character, index) => (
        <Col key={index} xs={20} sm={8} md={8} lg={6} xl={4}>
          <Link to="/Personajes/InfoPersonajes"> {/* Usa Link para crear un enlace */}
            <CharacterCard characterName={character} />
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default CharacterGrid;