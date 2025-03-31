import { React, useEffect } from "react";
import { Form, Input, Modal } from "antd";

const AgregarComics = ({ visible, onCancel, onAgregar, comicEdit }) => {
  const [form] = Form.useForm();

   useEffect(() => {
      if (comicEdit) {
        form.setFieldsValue(comicEdit); // Llenar el formulario si hay datos para editar
      } else {
        form.resetFields(); // Limpiar el formulario si es un nuevo registro
      }
    }, [comicEdit, form]);
  
    const handleSubmit = async () => {
      try {
        const values = await form.validateFields();
        if (comicEdit) {
          values.id = comicEdit.id; // Agregar el ID en caso de edición
        }
        onAgregar(values);
        form.resetFields(); // Limpiar el formulario después del envío
      } catch (error) {
        console.error("Error en el formulario:", error);
      }
    };

  return (
    <Modal
    title={comicEdit ? "Editar Comic" : "Agregar Comic"}
    open={visible}
    onCancel={onCancel}
    onOk={handleSubmit}
    okText={comicEdit ? "Editar" : "Agregar"}
    cancelText="Cancelar"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Autor"
          name="Autor"
          rules={[{ required: true, message: "El autor es obligatorio" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Creación"
          name="Creacion"
          rules={[{ required: true, message: "La fecha de creación es obligatoria" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Descripción"
          name="Descripcion"
          rules={[{ required: true, message: "La descripción es obligatoria" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Historia"
          name="Historia"
          rules={[{ required: true, message: "La historia es obligatoria" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Imagen (URL)"
          name="Imagen"
          rules={[{ required: true, message: "La URL de la imagen es obligatoria" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nombre"
          name="Nombre"
          rules={[{ required: true, message: "El nombre del personaje es obligatorio" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AgregarComics;