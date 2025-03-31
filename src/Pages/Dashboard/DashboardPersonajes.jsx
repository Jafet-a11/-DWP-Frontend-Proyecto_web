import React, { useEffect, useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import { personajes, Agregarpersonajes, Editarpersonajes, Eliminarpersonajes } from "../../services/MarvelService";
import { Button, notification, Table, Modal } from 'antd';  // Importar el componente Table de Ant Design
import AgregarPersonajes from "./Components/AgregarPersonajes";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
const DashboardPersonajes = () => {
  const [personajesData, setPersonajesData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [personajeEdit, setPersonajeEdit] = useState(null); // Estado para película en edición
  const [personajeDelete, setPersonajeDelete] = useState(null);

  const fetchPersonajes = async () => {
    try {
      const data = await personajes();
      setPersonajesData(data);
    } catch (error) {
    notification.error({ message: error || "Error en la solicitud" });
    }
  };

  const handleAgregarPelicula = async (values) => {
     try {
       if (values.id) {
         await Editarpersonajes(values);
         notification.success({ message: "Película editada correctamente" });
       } else {
         await Agregarpersonajes(values);
         notification.success({ message: "Película agregada correctamente" });
       }
       fetchPersonajes();
       setModalVisible(false);
       setPersonajeEdit(null); // Limpiar el estado después de cerrar el modal
     } catch (error) {
       notification.error({ message: error || "Error en la solicitud" });
     }
   };

  const eliminarPersonaje = async () => {
      try {
          await Eliminarpersonajes(personajeDelete);
          notification.success({ message: "Personaje eliminada correctamente" });
          fetchPersonajes();
          setModalEliminar(false);
        } catch (error) {
          notification.error({ message: error || "Error en la solicitud" });
          setModalEliminar(false);
        }
  };
  const handleEditarPersonaje = (record) => {
    setPersonajeEdit(record); // Llenar el estado con la película seleccionada
    setModalVisible(true); // Mostrar el modal
  };
  
  const handleEliminarPersonaje = (id) => {
    setPersonajeDelete(id); // Llenar el estado con la película seleccionada
    setModalEliminar(true); // Mostrar el modal
  };

  useEffect(() => {
    fetchPersonajes();
  }, []);
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Nombre', dataIndex: 'Nombre', key: 'nombre' },
    { title: 'Ubicacion', dataIndex: 'Ubicacion', key: 'ubicacion' },
    { title: 'Año', dataIndex: 'Creacion', key: 'creacion' },
    { title: 'Autor', dataIndex: 'Autor', key: 'autor' },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <>
          <Button onClick={() => handleEditarPersonaje(record)} style={{ marginRight: 8 }}><EditOutlined /></Button>
          <Button onClick={() => handleEliminarPersonaje(record.id)} style={{ color: 'red' }}><DeleteOutlined /></Button>
        </>
      ),
    },
  ];

  return (
    <MainLayout>
      <Button type="primary" onClick={() => {setModalVisible(true); setPersonajeEdit(null);}}>
        Agregar Personaje
      </Button>
      <h1>Personajes</h1>
      <Table dataSource={personajesData} columns={columns} rowKey="id" bordered />
      <AgregarPersonajes  visible={modalVisible} onCancel={() => { setModalVisible(false); setPersonajeEdit(null); }}
        onAgregar={handleAgregarPelicula} personajeEdit={personajeEdit} />

        <Modal title="Confirmar Eliminación"
        open={modalEliminar}
        onCancel={()=>{setModalEliminar(false)}}
        onOk={eliminarPersonaje}
        okText="Eliminar"
        cancelText="Cancelar"
        okButtonProps={{ danger: true }}>Estas seguro que deseas eliminar este personaje?</Modal>

      </MainLayout>
      
  );
};
export default DashboardPersonajes;