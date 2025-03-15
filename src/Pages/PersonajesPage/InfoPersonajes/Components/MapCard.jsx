// MapCard.js
import React from 'react';
import { Card } from 'antd';

const MapCard = () => {
  return (
    <Card
    style={{
      width: 500, // Aumentado el ancho fijo
      height: 350,
      borderRadius: '10px',
      border: "1px solid black",
    }}
    bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
        }}/>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>Mapa</div>
    </Card>
  );
};

export default MapCard;