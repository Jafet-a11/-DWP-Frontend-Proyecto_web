import React, { useState, useEffect } from 'react';
import { Layout, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import ContentArea from './Components/ContentArea';
import Header from '../../../Layouts/headear2';
import Foooter from '../../../Layouts/footer';
import { personajes } from '../../../services/MarvelService';

const { Content } = Layout;

const InfoPersonajes = () => {
  const { id } = useParams(); // Obtener ID de la URL
  const [personaje, setPersonaje] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonaje = async () => {
      try {
        setLoading(true);
        const data = await personajes();
        const selectedPersonaje = data.find((c) => c.id.toString() === id); // Llama a la API con el ID
        setPersonaje(selectedPersonaje);
      } catch (error) {
        console.error("Error al obtener el personaje:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonaje();
  }, [id]); // Se ejecuta cada vez que cambia el ID

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!personaje) {
    return <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Personaje no encontrado</h2>;
  }

  return (
    <Layout style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />
      <Content style={{ padding: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ContentArea personaje={personaje} /> {/* Pasa los datos al componente */}
      </Content>
      <Foooter />
    </Layout>
  );
};

export default InfoPersonajes;
