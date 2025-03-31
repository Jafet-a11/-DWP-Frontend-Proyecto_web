import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, Row, Col, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import LoginLoadingModal from "./Components/LoginModal";
import { useNavigate } from "react-router-dom";
import LoginErrorModal from "./Components/LoginModalError";
import { loginUser } from "../../services/authService"; // Importa la función de login
import CambioPasswordModal from "./Components/CambioPasswordModal";
import { ActualizarPassword } from "../../services/authService";
import { sendEmail } from "../../services/authService"; // Exportacion de api para enviar email
import { Verificacion } from "../../services/authService"; // Importa la función de verificacion
import CodigoModal from "./Components/CodigoModal";
import { VerificacionInicioSesion } from "../../services/authService";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [CambioPassword, setCambioPassword] = useState(false);
  const [CodigosModal, setCodigosModal] = useState(false);
  const [CodigoInicioModal, setCodigoInicioModal] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [formData, setformData] = useState();
  const navigate = useNavigate();

  const showLoginErrorModal = () => {
    setIsErrorModalVisible(true);
  };

  const handleLoginErrorModalOk = () => {
    setIsErrorModalVisible(false);
  };

  const verificacion = async (values) => {
    try {
      values.codigo = Math.random().toString(36).substring(2, 8).toUpperCase();
      const response = await Verificacion(values);
      setformData(values);
      if (response.status === 200) {
        await sendEmail(values.email, "Código", `¡Código para cambio de contraseña! Tu código es: ${values.codigo}`);
        setCodigosModal(true);
      }
    } catch (error) {
      notification.error({ message: "Error", description: error });
    }
  };

  const verificacionInicio = async (values) => {
    try {
      values.codigo = Math.random().toString(36).substring(2, 8).toUpperCase();
      const response = await VerificacionInicioSesion(values);
      if (response.status === 200) {
        await sendEmail(values.email, "Código", `¡Código para iniciar sesión! Tu código es: ${values.codigo}`);
        setCodigoInicioModal(true);
        return values.codigo; // Devolvemos el código generado
      }
    } catch (error) {
      notification.error({ message: "Error", description: error });
    }
    return null;
  };

  const cambioPassword = async (codigo) => {
    try {
      const response = await ActualizarPassword(formData.email, formData.newPassword, codigo);
      if (response.status === 200) {
        notification.success({ message: "Cambio de contraseña exitoso", });
        setCodigosModal(false);
        setCambioPassword(false);
      }
    } catch (error) {
      notification.error({ message: "Error", description: error });
    }
  };

  const verificarCodigoInicioSesion = async (codigoIngresado) => {
    if (codigoIngresado === formData.codigo) {
      try {
        const response = await loginUser(formData.email, formData.password);
        if (response.token) {
          
          if (response.userData.role === 1) {
            notification.success({ message: `Inicio de sesión exitoso: ${response.userData.username}` });
            navigate("/Home");
          } else {
            notification.success({ message: `Inicio de sesión exitoso: ${response.userData.username}` });
            navigate("/DashboardHome");
          }
        } else {
          showLoginErrorModal();
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        showLoginErrorModal();
      } finally {
        setCodigoInicioModal(false);
      }
    } else {
      notification.error({ message: "Código incorrecto" });
    }
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const codigoGenerado = await verificacionInicio(values);
      if (codigoGenerado) {
        setformData(values); // Guardamos los valores para usarlos luego en el modal
        return; // Detenemos aquí, el login se ejecutará después de validar el código
      } else {
        showLoginErrorModal();
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      showLoginErrorModal();
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    localStorage.clear();
  };
  useEffect(() => {
    logout();
  }, []);

  return (
    <Row style={{ height: "100vh" }}>
      {/* Columna izquierda */}
      <Col span={12} style={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
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
        <Card style={{ width: 350, textAlign: "center", backgroundColor: "#fff", border: "none" }}>
          <div style={{ width: 100, height: 100, borderRadius: "50%", background: "white", margin: "0 auto 20px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
            <img src="/Designer.jpeg" alt="Imagen de logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item name="email" rules={[
              { required: true, message: "Debe completar este campo." },
              {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingrese un correo válido.",
              },
            ]}>
              <Input prefix={<UserOutlined />} placeholder="Correo electrónico" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: "100%", backgroundColor: "#880044", borderColor: "#fff" }}>Iniciar sesión</Button>
            </Form.Item>
          </Form>
          <Button type="link" onClick={() => { navigate("/RegistrationPage") }}>¿No tienes cuenta?</Button>
          <Button type="link" onClick={() => { setCambioPassword(true) }}>¿Olvidaste tu contraseña?</Button>
        </Card>
      </Col>
      <LoginLoadingModal visible={loading} onCancel={() => setLoading(false)} />
      <LoginErrorModal visible={isErrorModalVisible} onOk={handleLoginErrorModalOk} />
      <CodigoModal visible={CodigosModal} onPassword={cambioPassword} onCancel={() => setCodigosModal(false)} />
      <CodigoModal visible={CodigoInicioModal} onPassword={verificarCodigoInicioSesion} onCancel={() => setCodigoInicioModal(false)} />
      <CambioPasswordModal visible={CambioPassword} onVerificacion={verificacion} onCancel={() => setCambioPassword(false)} />
    </Row>
  );
};
export default Login;