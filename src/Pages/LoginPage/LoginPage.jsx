import React, { useState } from "react";
import { Form, Input, Button, Card, Row, Col } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import LoginLoadingModal from "./Components/LoginModal";
import { useNavigate } from "react-router-dom";
import LoginErrorModal from "./Components/LoginModalError";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const navigate = useNavigate();

  const showLoginErrorModal = () => {
    setIsErrorModalVisible(true);
  };

  const handleLoginErrorModalOk = () => {
    setIsErrorModalVisible(false);
  };

  const onFinish = async (values) => {
    console.log("Received values of form:", values);
    setLoading(true); // Muestra el modal de carga al iniciar la sesión
    try {
      // Simulación de una petición basada en el correo (reemplaza con tu lógica real)
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (values.email === "1") {
            // Simulación de carga exitosa (si el correo es "1")
            resolve({ success: true });
          } else if (values.email === "2") {
            // Simulación de error en el login (si el correo es "2")
            reject(new Error("Credenciales inválidas"));
          } else {
            // Otro caso (puedes manejarlo como éxito o error según tu lógica)
            resolve({ success: true });
          }
        }, 2000);
      });

      if (response && response.success) {
        navigate("/Home");
      } else {
        showLoginErrorModal();
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      showLoginErrorModal(); // Muestra el modal de error en caso de excepción
    } finally {
      setLoading(false); // Oculta el modal de carga al finalizar (éxito o error)
    }
  };

  return (
    <Row style={{ height: "100vh" }}>
      {/* Columna izquierda */}
      <Col span={12} style={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} >
        <img
          src="/Hulk.jpg"
          alt="Imagen de login"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </Col>

      {/* Columna derecha */}
      <Col span={12} style={{ backgroundColor: "#2E8B57", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card style={{ width: 350, textAlign: "center", backgroundColor: "#2E8B57", border: "none" }}>
          <div style={{ width: 100, height: 100, borderRadius: "50%", background: "white", margin: "0 auto 20px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
            <img src="/Designer.jpeg" alt="Imagen de logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
          <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item name="email" rules={[{ required: true, message: "Por favor ingresa tu correo" }]}>
              <Input prefix={<UserOutlined />} placeholder="Correo electrónico" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: "100%", backgroundColor: "#880044", borderColor: "#fff" }}>Iniciar sesión</Button>
            </Form.Item>
          </Form>
          <Button icon={<GoogleOutlined />} style={{ width: "100%", marginBottom: 10 }}>Inicio de sesión con Google</Button>
          <div style={{ color: "white" }}><a href="/RegistrationPage" >¿No tienes cuenta?</a></div>
        </Card>
      </Col>
      <LoginLoadingModal visible={loading} onCancel={() => setLoading(false)} />
      <LoginErrorModal visible={isErrorModalVisible} onOk={handleLoginErrorModalOk} />
    </Row>
  );
};

export default Login;