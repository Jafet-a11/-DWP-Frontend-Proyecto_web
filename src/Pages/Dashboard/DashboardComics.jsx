import React, { useEffect, useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import { comics, Editarcomics, Eliminarcomics, Agregarcomics } from "../../services/MarvelService";
import { Table, Button, notification, Modal } from 'antd';  // Importar el componente Table de Ant Design
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import AgregarComic from "./Components/AgregarComic";

const DashboardComics = () => {
  const [comicsData, setComicsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [comicEdit, setComicEdit] = useState(null); // Estado para película en edición
  const [comicDelete, setComicDelete] = useState(null);

  const fetchComics = async () => {
    try {
      const data = await comics();
      setComicsData(data);
    } catch (error) {
      notification.error({ message: error || "Error en la solicitud" });
    }
  };

  const handleAgregarComics = async (values) => {
    try {
      if (values.id) {
        await Editarcomics(values);
        notification.success({ message: "Comic editado correctamente" });
      } else {
        await Agregarcomics(values);
        notification.success({ message: "Comic agregado correctamente" });
      }
      fetchComics();
      setModalVisible(false);
      setComicEdit(null); // Limpiar el estado después de cerrar el modal
    } catch (error) {
      notification.error({ message: error || "Error en la solicitud" });
    }
  };

  const eliminarComic = async () => {
    try {
      await Eliminarcomics(comicDelete);
      notification.success({ message: "Comic eliminado correctamente" });
      fetchComics();
      setModalEliminar(false);
    } catch (error) {
      notification.error({ message: error || "Error en la solicitud" });
      setModalEliminar(false);
    }
  };

  const handleEditarComic = (record) => {
    setComicEdit(record); // Llenar el estado con la película seleccionada
    setModalVisible(true); // Mostrar el modal
  };

  const handleEliminarComic = (id) => {
    setComicDelete(id); // Llenar el estado con la película seleccionada
    setModalEliminar(true); // Mostrar el modal
  };

  useEffect(() => {
    fetchComics();
  }, []);

  const columns = [
    { title: 'id', dataIndex: 'id', key: 'id', },
    { title: 'Autor', dataIndex: 'Autor', key: 'autor', },
    { title: 'Nombre', dataIndex: 'Nombre', key: 'nombre', },
    { title: 'Año', dataIndex: 'Creacion', key: 'creacion', },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <>
          <Button onClick={() => handleEditarComic(record)} style={{ marginRight: 8 }}><EditOutlined /></Button>
          <Button onClick={() => handleEliminarComic(record.id)} style={{ color: 'red' }}><DeleteOutlined /></Button>
        </>
      ),
    },
  ];

  return (
    <MainLayout>
      <Button type="primary" onClick={() => { setModalVisible(true); setComicEdit(null); }}>
        Agregar Comic
      </Button>
      <h1>Comics</h1>
      <Table dataSource={comicsData} columns={columns} rowKey="id" bordered />
      <AgregarComic visible={modalVisible} onCancel={() => { setModalVisible(false); setComicEdit(null); }}
        onAgregar={handleAgregarComics} comicEdit={comicEdit} />

      <Modal title="Confirmar Eliminación"
        open={modalEliminar}
        onCancel={() => { setModalEliminar(false) }}
        onOk={eliminarComic}
        okText="Eliminar"
        cancelText="Cancelar"
        okButtonProps={{ danger: true }}>Estas seguro que deseas eliminar este comic?
      </Modal>

    </MainLayout>
  );
};

export default DashboardComics;