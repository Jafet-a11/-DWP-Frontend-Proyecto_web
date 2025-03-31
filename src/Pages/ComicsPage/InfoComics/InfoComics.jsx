import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Layout, Spin } from 'antd';
import ComicCard from './Components/ComicCard';
import ComicDetails from './Components/ComicDetails';
import Header from '../../../Layouts/headear2';
import Foooter from '../../../Layouts/footer';
import { comics } from '../../../services/MarvelService'; // Importa la API

const { Content } = Layout;

function InfoComics() {
  const { id } = useParams(); // Obtener ID de la URL
  const [comic, setComic] = useState(null);
  
  const fetchComic = async () => {
    const data = await comics(); // Obtiene la lista de cómics
    const selectedComic = data.find((c) => c.id.toString() === id);
    setComic(selectedComic);
  };

  useEffect(() => {
    fetchComic();
  },[]);

  if (!comic) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // Para centrar en toda la pantalla
      }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />
      <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ padding: '100px' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
              <ComicCard comic={comic} />
            </Col>
            <Col xs={24} sm={16}>
              <ComicDetails comic={comic} />
            </Col>
          </Row>
        </div>
      </Content>
      <Foooter />
    </Layout>
  );
}

export default InfoComics;
