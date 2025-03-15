import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { HomeOutlined, MessageOutlined, MailOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

function Foooter() {
  return (
    <Footer style={{ background: '#99003d', color: 'white', textAlign: 'center', padding: '20px' }}>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <HomeOutlined style={{ fontSize: '24px', marginBottom: '8px' }} />
          <Text style={{ color: 'white' }}>Av. Pie de la Cuesta 2501, Nacional, 76148</Text> 
          <Text style={{ color: 'white' }}>Santiago de Querétaro, Qro.</Text> 
        </Col>
        <Col xs={24} sm={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <MessageOutlined style={{ fontSize: '24px', marginBottom: '8px' }} />
          <Text style={{ color: 'white' }}>Datos de contacto: 442 749 3089</Text> 
        </Col>
        <Col xs={24} sm={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <MailOutlined style={{ fontSize: '24px', marginBottom: '8px' }} />
          <Text style={{ color: 'white' }}>Correo: 2022371089@uteq.edu.mx</Text> 
        </Col>
      </Row>
    </Footer>
  );
}

export default Foooter;