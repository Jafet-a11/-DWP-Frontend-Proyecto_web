import { Layout, notification } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

const { Header } = Layout;

function HeaderComponent() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [selected, setSelected] = useState('Home'); // Estado para botón activo

  const logout = () => {
    localStorage.clear(); // Borra todos los datos del localStorage
    navigate("/LoginPage");
  };

  if (token === null) {
    notification.error({message:"Debes iniciar sesión"},);
    setTimeout(() => {
    window.location.href = "/LoginPage";
 }, 1000); // Redirige después de 1 segundo
} 

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
        <button style={buttonStyle('Cerrar sesión')} onClick={() => { logout(); setSelected('Cerrar sesión'); }}>
          Cerrar sesión
        </button>
      </div>

    </Header>
  );
}
export default HeaderComponent;