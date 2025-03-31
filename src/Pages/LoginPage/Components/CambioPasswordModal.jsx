import { Modal, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const FormPassword = ({ visible, onCancel, onVerificacion }) => {
  const [formLogin] = Form.useForm();

  return (
    <Modal
      title="Actualizar Contraseña"
      open={visible}
      onCancel={onCancel}
      footer={null}
      style={{ top: 20 }}
    >
      <Form
        form={formLogin}
        layout="vertical"
        onFinish={async (values) => {

          await onVerificacion(values);
          formLogin.resetFields();  
       
        }}
      >
        <Form.Item label="Correo" name="email"
                  rules={[
                      { required: true, message: "Debe completar este campo." },
                      {
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Ingrese un correo válido.",
                      },
                  ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Ingrese su correo" />
        </Form.Item>

        <Form.Item label="Nueva Contraseña" name="newPassword" 
        rules={[
            { required: true, message: "Debe completar este campo." },
            {
              validator: (_, value) =>
                value && value.includes(" ")
                  ? Promise.reject("La contraseña no puede contener espacios.")
                  : Promise.resolve(),
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Ingrese su nueva contraseña" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Guardar nueva contraseña
          </Button>
          <Button type="default"  style={{margin: "5px"}} onClick={()=> {onCancel();}}>
          Cancelar    
        </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default FormPassword;