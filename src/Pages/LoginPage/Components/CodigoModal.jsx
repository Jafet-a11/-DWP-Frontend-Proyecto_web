import React, { useState } from "react";
import { Modal, Input, Button, Typography, Row, Col } from "antd";

const { Text } = Typography;

const VerificationModal = ({ visible, onCancel, onPassword }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]); // Estado para el código de verificación

  // Función para manejar la escritura en los inputs
  const handleChange = (index, value) => {
    if (!/^[0-9a-zA-Z]?$/.test(value)) return; // Solo permite caracteres alfanuméricos
    const newCode = [...code];
    newCode[index] = value.toUpperCase(); // Guarda en mayúscula
    setCode(newCode);
  };

  // Función para enviar el código
  const handleSubmit = () => {
    const finalCode = code.join(""); // Une los valores ingresados
    if (finalCode.length === 6) {
      onPassword(finalCode); // Llama a la función con el código completo
    } else {
      console.error("Código incompleto");
    }
  };

  return (
    <Modal title="Autenticación de doble factor" open={visible} onCancel={onCancel} footer={null} centered>
      <Row justify="center" gutter={8}>
        {code.map((char, index) => (
          <Col key={index}>
            <Input
              maxLength={1}
              value={char}
              onChange={(e) => handleChange(index, e.target.value)}
              style={{ width: 40, height: 40, textAlign: "center", fontSize: 18 }}
            />
          </Col>
        ))}
      </Row>

      <Text style={{ display: "block", marginTop: 10, textAlign: "center" }}>
        Se ha enviado un mensaje con un código de verificación a tu correo.
      </Text>

      <Button type="primary" block style={{ marginTop: 15 }} onClick={handleSubmit}>
        Verificar Código
      </Button>

      <Text
        style={{ display: "block", textAlign: "center", marginTop: 10, color: "#1890ff", cursor: "pointer" }}
      >
      </Text>
    </Modal>
  );
};

export default VerificationModal;
