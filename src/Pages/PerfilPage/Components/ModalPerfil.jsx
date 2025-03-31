// Componente modal de éxito
import { Button, Modal } from 'antd';
import {CheckCircleOutlined } from '@ant-design/icons';

const ProfileUpdateSuccessModal = ({ visible, onOk }) => {
  return (
    <Modal
      visible={visible}
      title={null}
      closable={false}
      footer={[
        <Button key="ok" type="primary"className="button2" onClick={onOk}>
          Aceptar
        </Button>,
      ]}
      bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}
    >
      <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '64px', marginBottom: '20px' }} />
      <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
        Datos actualizados correctamente
       
      </p>
      Nota: para ver tu nueva foto inicia sesion nuevamente.
    </Modal>
  );
};
export default ProfileUpdateSuccessModal;
