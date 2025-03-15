import { Layout, Input, Button } from 'antd';
import { useState } from 'react';
import'./App.css';
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

function HeaderComponent() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('Home'); // Estado para el botón activo

  const buttonStyle = (buttonName) => ({
    background: selected === buttonName ? 'black' : 'transparent',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    margin: '0 5px',
    cursor: 'pointer',
    borderRadius: selected === buttonName ? '8px' : '0',
    transition: 'background 0.3s ease, border-radius 0.3s ease',
  });

  return (
    <Header className='header'>
      <div style={{ display: 'flex' }}>
        <button style={buttonStyle('Home')} onClick={() => { navigate('/Home'); setSelected('Home'); }}>
          Home
        </button>
        <button style={buttonStyle('Perfil')} onClick={() => { navigate('/Perfil'); setSelected('Perfil'); }}>

          Perfil
        </button>
        <button
          style={buttonStyle('Cerrar sesión')} onClick={() => { navigate('/LoginPage'); setSelected('Cerrar sesión'); }} >
          Cerrar sesión
        </button>
      </div>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Input placeholder="Buscar" className='ipunt-buscar' />
        <Button type="default" className='button2'>
          Buscar
        </Button>
      </div>
    </Header>
  );
}

export default HeaderComponent;
