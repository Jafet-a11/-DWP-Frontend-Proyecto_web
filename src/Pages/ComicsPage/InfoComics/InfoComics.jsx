// App.js
import React from 'react';
import { Row, Col, Layout } from 'antd';
import ComicCard from './Components/ComicCard';
import ComicDetails from './Components/ComicDetails';
import Header from '../../../Layouts/headear';
import Foooter from '../../../Layouts/footer';
const { Content } = Layout;

function InfoComics() {
    return (
        <Layout>
            <Header />
        <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ padding: '100px' }}>
                <Row gutter={[16, 16]}>
                    <Col xs={40} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
                        <ComicCard />
                    </Col>
                    <Col xs={24} sm={16}>
                        <div style={{ marginBottom: '20px' }}>
                            <div>Publicación: Lorem</div>
                            <div>Dibujante: Lorem</div>
                            <div>Autor: Lorem</div>
                        </div>
                        <ComicDetails />
                    </Col>
                </Row>
            </div>
            </Content>
            <Foooter />
        </Layout>
    );
};

export default InfoComics;