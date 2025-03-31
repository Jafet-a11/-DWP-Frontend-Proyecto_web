import React, {useEffect} from "react";
import { Form, Input, Button, Card, Row, Col, message, notification } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../services/authService";  // Importación correcta

const Register = () => {
    const navigate = useNavigate();

    // Manejo del envío del formulario
    const onFinish = async (values) => {
        const { username, email, password, confirmPassword, fullname } = values;

        if (password !== confirmPassword) {
            message.error("Las contraseñas no coinciden");
            return;
        }
        try {
            await RegisterUser(username, email, password, fullname);
            notification.success({ message: "Registro exitoso", });
            navigate("/LoginPage"); // Redirigir al login después del registro
        } catch (error) {
            message.error(error || "Error en el registro");
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
            {/* Columna izquierda con imagen */}
            <Col span={12} style={{ height: "100vh" }}>
                <div style={{ height: "100%", overflow: "hidden" }}>
                    <img
                        src="/Spider.jpg"
                        alt="Imagen de login"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
            </Col>

            {/* Columna derecha con formulario */}
            <Col span={12} style={{ backgroundColor: "#BCCCDC", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card style={{ width: 400, textAlign: "center", backgroundColor: "#fff", border: "none" }}>
                    <div style={{ width: 100, height: 100, borderRadius: "50%", background: "white", margin: "0 auto 20px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                        <img src="/Designer.jpeg" alt="Imagen de logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <Form name="register" initialValues={{ remember: true }} onFinish={onFinish} layout="vertical">
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item name="username" rules={[{ required: true, message: "Por favor ingresa tu nombre de usuario" }]}>
                                    <Input prefix={<UserOutlined />} placeholder="Nombre de usuario" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="password" rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}>
                                    <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item name="email" rules={[{ required: true, message: "Por favor ingresa tu correo electrónico" }]}>
                                    <Input prefix={<MailOutlined />} placeholder="Correo electrónico" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="confirmPassword" rules={[{ required: true, message: "Por favor repite tu contraseña" }]}>
                                    <Input.Password prefix={<LockOutlined />} placeholder="Repetir contraseña" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item name="fullname" rules={[{ required: true, message: "Por favor ingresa tu nombre completo" }]}>
                            <Input prefix={<UserOutlined />} placeholder="Nombre completo" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: "100%", backgroundColor: "#880044", borderColor: "#fff" }}>Registrarse</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button style={{ width: "100%", backgroundColor: "#880044", borderColor: "#fff", color: "white" }} onClick={() => navigate("/LoginPage")}>Iniciar sesión</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};
export default Register;