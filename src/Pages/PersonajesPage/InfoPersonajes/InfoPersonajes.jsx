// App.js
import React from 'react';
import { Layout } from 'antd';
import ContentArea from './Components/ContentArea';
import Header from '../../../Layouts/headear';
import Foooter from '../../../Layouts/footer';
const { Content } = Layout;

const App = () => {
  return (
    <Layout>
       <Header/> 
       <Content style={{ padding: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ContentArea />
      </Content>
      <Foooter/>
    </Layout>
  );
};

export default App;