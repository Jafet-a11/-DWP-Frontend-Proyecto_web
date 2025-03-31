import React, { useEffect, useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import { Agregarpeliculas, peliculas, Editarpeliculas, Eliminarpeliculas } from "../../services/MarvelService";  
import { Table, Button, notification, Modal } from 'antd';  
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import AgregarPelicula from "./Components/AgregarPelicula";

const DashboardPeliculas = () => {
  const [peliculasData, setPeliculasData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [peliculaEdit, setPeliculaEdit] = useState(null); // Estado para película en edición
  const [peliculaDelete, setPeliculaDelete] = useState(null);
  const fetchPeliculas = async () => {
    try {
      const data = await peliculas();
      setPeliculasData(data);
    } catch (error) {
      notification.error({ message: error || "Error en la solicitud" });
    }
  };

  const handleAgregarPelicula = async (values) => {
    try {
      if (values.id) {
        await Editarpeliculas(values);
        notification.success({ message: "Película editada correctamente" });
      } else {
        await Agregarpeliculas(values);
        notification.success({ message: "Película agregada correctamente" });
      }
      fetchPeliculas();
      setModalVisible(false);
      setPeliculaEdit(null); // Limpiar el estado después de cerrar el modal
    } catch (error) {
      notification.error({ message: error || "Error en la solicitud" });
    }
  };

  const handleEditarPelicula = (record) => {
    setPeliculaEdit(record); // Llenar el estado con la película seleccionada
    setModalVisible(true); // Mostrar el modal
  };
  
  const handleEliminarPelicula = (id) => {
    setPeliculaDelete(id); // Llenar el estado con la película seleccionada
    setModalEliminar(true); // Mostrar el modal
  };

  const eliminarPelicula = async () => {
    try {
      await Eliminarpeliculas(peliculaDelete);
      notification.success({ message: "Película eliminada correctamente" });
      fetchPeliculas();
      setModalEliminar(false);
    } catch (error) {
      notification.error({ message: error || "Error en la solicitud" });
      setModalEliminar(false);
    }
  };

  useEffect(() => {
    fetchPeliculas(); 
  }, []);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Nombre', dataIndex: 'Nombre', key: 'nombre' },
    { title: 'Director', dataIndex: 'Director', key: 'director' },
    { title: 'Actores', dataIndex: 'Actores', key: 'actores' },
    { title: 'Año', dataIndex: 'Fecha', key: 'fecha' },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <>
          <Button onClick={() => handleEditarPelicula(record)} style={{ marginRight: 8 }}><EditOutlined /></Button>
          <Button onClick={() => handleEliminarPelicula(record.id)} style={{ color: 'red' }}><DeleteOutlined /></Button>
        </>
      ),
    },
  ];

  return (
    <MainLayout>
      <Button type="primary" onClick={() => { setModalVisible(true); setPeliculaEdit(null); }}> Agregar Película</Button>

      <h1>Películas</h1>
      <Table dataSource={peliculasData} columns={columns} rowKey="id" />
      <AgregarPelicula
        visible={modalVisible} onCancel={() => { setModalVisible(false); setPeliculaEdit(null); }}
        onAgregar={handleAgregarPelicula} peliculaEdit={peliculaEdit}
      />
      <Modal title="Confirmar Eliminación"
        open={modalEliminar}
        onCancel={()=>{setModalEliminar(false)}}
        onOk={eliminarPelicula}
        okText="Eliminar"
        cancelText="Cancelar"
        okButtonProps={{ danger: true }}>Estas seguro que deseas eliminar este pelicula?</Modal>
    </MainLayout>
  );
};
export default DashboardPeliculas;