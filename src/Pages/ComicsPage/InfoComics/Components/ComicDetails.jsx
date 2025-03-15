// ComicDetails.js
import React from 'react';
import { Typography, Button } from 'antd';

const { Title, Text } = Typography;

const ComicDetails = () => {
  return (
    <div>
      <Title level={2}>Historia</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button type="primary" style={{ backgroundColor: '#99003d', borderColor: '#99003d' }}>
          Más detalles
        </Button>
      </div>
    </div>
  );
};

export default ComicDetails;