import React, { useEffect } from "react";
import { Form, Input, Modal } from "antd";

const AgregarPelicula = ({ visible, onCancel, onAgregar, peliculaEdit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (peliculaEdit) {
      form.setFieldsValue(peliculaEdit); // Llenar el formulario si hay datos para editar
    } else {
      form.resetFields(); // Limpiar el formulario si es un nuevo registro
    }
  }, [peliculaEdit, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (peliculaEdit) {
        values.id = peliculaEdit.id; // Agregar el ID en caso de edición
      }
      onAgregar(values);
      form.resetFields(); // Limpiar el formulario después del envío
    } catch (error) {
      console.error("Error en el formulario:", error);
    }
  };

  return (
    <Modal
      title={peliculaEdit ? "Editar Película" : "Agregar Película"}
      open={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      okText={peliculaEdit ? "Editar" : "Agregar"}
      cancelText="Cancelar"
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Director" name="Director" rules={[{ required: true, message: "El director es obligatorio" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Fecha" name="Fecha" rules={[{ required: true, message: "La fecha es obligatoria" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Actores" name="Actores" rules={[{ required: true, message: "Los actores son obligatorios" }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Historia" name="Historia" rules={[{ required: true, message: "La historia es obligatoria" }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Imagen (URL)" name="Imagen" rules={[{ required: true, message: "La URL de la imagen es obligatoria" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Nombre" name="Nombre" rules={[{ required: true, message: "El nombre es obligatorio" }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AgregarPelicula;
