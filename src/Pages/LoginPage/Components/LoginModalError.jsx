// Componente modal de error de login
import { Button, Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
const LoginErrorModal = ({ visible, onOk }) => {
  return (
    <Modal
      visible={visible}
      title={null}
      closable={false}
      footer={[
        <Button key="ok" type="primary" className="button2" onClick={onOk}>
          Aceptar
        </Button>,
      ]}
      bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}
    >
      <CloseCircleOutlined style={{ color: '#ff4d4f', fontSize: '64px', marginBottom: '20px' }} />
      <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
        Error al iniciar sesión
      </p>
      <p style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.65)' }}>
        Por favor, verifica tus credenciales e intenta nuevamente.
      </p>
    </Modal>
  );
};
export default LoginErrorModal;