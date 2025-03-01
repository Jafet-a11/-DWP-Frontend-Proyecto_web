import React from "react";
import { Form, Input, Button, Card, Row, Col } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const onFinish = (values) => {
        console.log("Received values of form:", values);
    };
    const navigate = useNavigate();
    return (
        <Row style={{ height: "100vh" }}>
            {/* Columna izquierda */}
            <Col span={12} style={{ height: "100vh" }}> {/* Asegura que el Col tenga la altura completa */}
                <div style={{ height: "100%", overflow: "hidden" }}> {/* Contenedor para la imagen */}
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

            {/* Columna derecha */}
            <Col span={12} style={{ backgroundColor: "#660033", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card style={{ width: 400, textAlign: "center", backgroundColor: "#660033", border: "none" }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", background: "white", margin: "0 auto 20px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                    <img src="/Designer.jpeg" alt="Imagen de logo"
                            style={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: "cover" // Ajusta la imagen manteniendo la proporción
                            }}
                    />
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
                            <Button style={{ width: "100%" }} onClick={() => navigate("/LoginPage")}>Iniciar sesión</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default Register;
