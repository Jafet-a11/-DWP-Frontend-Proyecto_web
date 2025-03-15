import { Layout, Input, Button, Card, Form, Avatar, Upload, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import Header from '../../Layouts/headear';
import '../../App.css';
import Foooter from '../../Layouts/footer';
import { useState } from 'react';
import ModalPerfil from "./Components/ModalPerfil";

const { Content } = Layout;


function ProfilePage() {
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showSuccessModal = () => {
    setIsSuccessModalVisible(true);
  };

  const handleSuccessModalOk = () => {
    setIsSuccessModalVisible(false);
    // Aquí podrías redirigir al usuario o realizar alguna otra acción
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    setTimeout(() => {
      showSuccessModal();
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <Header />
      <Content style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Card style={{ width: 300, height: 450, textAlign: 'center' }}>
            <Avatar size={100} icon={<UserOutlined />} />
            <h3>JUAN PEREZ</h3>
            <Upload>
              <Button type="primary" className='button2'>Cambiar foto</Button>
            </Upload>
          </Card>
          <Card
            title="Editar perfil"
            style={{ width: 'fit-content', height: 'fit-content' }}
            actions={[
              <Button
                key="save"
                type="primary"
                className="button2 button-custom-width"
                style={{ marginTop: '15px' }}
                onClick={() => form.submit()} // Llama a form.submit al hacer clic
              >
                Guardar cambios
              </Button>,
            ]}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: 'Por favor ingresa tu nombre!' }]}>
                    <Input prefix={<UserOutlined />} placeholder="Nombre" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Por favor ingresa tu username!' }]}>
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Correo" name="correo" rules={[{ required: true, message: 'Por favor ingresa tu correo!', type: 'email' }]}>
                    <Input prefix={<MailOutlined />} placeholder="Correo" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Contraseña" name="contrasena">
                    <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
                  </Form.Item>
                </Col>
                <div style={{ marginTop: '185px' }}> {/* Div con margen */}

                </div>
              </Row>
            </Form>
          </Card>
        </div>
      </Content>
      <Foooter />
      <ModalPerfil
        visible={isSuccessModalVisible}
        onOk={handleSuccessModalOk}
      />
    </Layout>
  );
}

export default ProfilePage;