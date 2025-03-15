import React from "react";
import { Modal, Button } from "antd";
import "../Login.css"; // Asegúrate de que la ruta sea correcta

const CustomLoadingIndicator = ({ size }) => {
  const style = {
    width: size,
    height: size,
    borderWidth: `${size / 10}px`,
    borderTopWidth: `${size / 10}px`,
  };
  return <div className="custom-loader" style={style}></div>;
};

const LoginLoadingModal = ({ visible, onCancel }) => {
  return (
    <Modal
      title={null}
      centered
      closable={false}
      maskClosable={false}
      visible={visible}
      footer={null}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <CustomLoadingIndicator size={65} /> {/* Icono de carga principal */}
      </div>
      <Button
        type="primary"
        style={{
          backgroundColor: "#880044",
          borderColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px 16px",
        }}
        disabled={true} // Generalmente deshabilitado en un modal de carga
      >
        <CustomLoadingIndicator size={16} /> {/* Icono de carga en el botón */}
        <span style={{ marginLeft: 8, color:'white'}}>Cargando datos...</span>
      </Button>
    </Modal>
  );
};

export default LoginLoadingModal;