import { Layout, Input, Button, Card, Form, Avatar, Upload, Row, Col } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import Header from '../../Layouts/headear2';
import '../../App.css';
import Foooter from '../../Layouts/footer';
import { useState, useEffect } from 'react';
import ModalPerfil from "./Components/ModalPerfil";
import { updateUser } from "../../services/authService";
const { Content } = Layout;

function ProfilePage() {
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [fullname, setFullname] = useState(localStorage.getItem("fullname") || "");
  const [imageUrl, setImageUrl] = useState(localStorage.getItem("imageBase64") || "");
 
  const showSuccessModal = () => {
    setIsSuccessModalVisible(true);
  };

  const handleSuccessModalOk = () => {
    setIsSuccessModalVisible(false);
  };

  const handleImageChange = (info) => {
    console.log("handleImageChange ejecutado");
    const fileList = info.fileList;
    const lastFile = fileList[fileList.length - 1];

    if (!lastFile || !lastFile.originFileObj) {
        console.log("No se encontró un archivo válido.");
        return;
    }

    const file = lastFile.originFileObj;
    const reader = new FileReader();
    reader.onload = (e) => {
        const base64String = e.target.result.split(",")[1];
        setImageUrl(e.target.result); // Actualizar la vista con la imagen seleccionada
        form.setFieldsValue({ imageBase64: base64String });
    };
    
    reader.onerror = (error) => {
        console.error("Error al leer el archivo:", error);
    };
    
    reader.readAsDataURL(file);
};

  const onFinish = async (values) => {
    try {
      const userData = { 
        ...values, 
        imageBase64: values.imageBase64 || imageUrl.split(",")[1] 
      };
  
      const response = await updateUser(userData);
      console.log(response);
      if (response) {
        localStorage.setItem("username", userData.username);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("fullname", userData.fullname);
        if (response.imageBase64) {
          localStorage.setItem("imageBase64", `data:image/png;base64,${response.imageBase64}`);
          setImageUrl(`data:image/png;base64,${response.imageBase64}`);
        }
  
        setUsername(userData.username);
        setEmail(userData.email);
        setFullname(userData.fullname);
  
        showSuccessModal();
      }
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("username") || "");
      setEmail(localStorage.getItem("email") || "");
      setFullname(localStorage.getItem("fullname") || "");
      setImageUrl(localStorage.getItem("imageBase64") || "");
    };
  
    window.addEventListener("storage", handleStorageChange);
  
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
     <Layout style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />
      <Content style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      
        <div style={{ display: 'flex', gap: '20px' }}>
          <Card style={{ width: 300, height: 450, textAlign: 'center' }}>
            <Avatar size={100} src={imageUrl} />
            <h3>{fullname || "Usuario"}</h3>
            <Upload showUploadList={false} beforeUpload={() => false} onChange={handleImageChange}>
              <Button type="primary" className='button2'>Cambiar foto</Button>
            </Upload>
          </Card>
          <Card
            title="Editar perfil"
            style={{ width: 'fit-content', height: 'fit-content' }}
            actions={[
              <Button key="save" type="primary" className="button2 button-custom-width" style={{ marginTop: '15px' }} onClick={() => form.submit()}>
                Guardar cambios
              </Button>,
            ]}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                fullname: fullname,
                username: username,
                email: email,
              }}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Nombre" name="fullname" rules={[{ required: true, message: 'Por favor ingresa tu nombre!' }]}>
                    <Input prefix={<UserOutlined />} placeholder="Nombre" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Por favor ingresa tu username!' }]}>
                    <Input prefix={<UserOutlined />} placeholder="Nombre de usuario" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Correo" name="email" rules={[{ required: true, message: 'Por favor ingresa tu correo!', type: 'email' }]}>
                    <Input prefix={<MailOutlined />} placeholder="Correo" />
                  </Form.Item>
                </Col>
                <div style={{ marginTop: '185px' }}></div>
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