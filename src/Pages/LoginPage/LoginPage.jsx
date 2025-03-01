import React from "react";
import { Form, Input, Button, Card, Row, Col } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
const Login = () => {
    const onFinish = (values) => {
        console.log("Received values of form:", values);
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
            <Col span={12} style={{ backgroundColor: "#660033", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card style={{ width: 350, textAlign: "center", backgroundColor: "#660033", border: "none" }}>
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
        </Row>
    );
};

export default Login;
