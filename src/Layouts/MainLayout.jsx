import React from "react";
import { Layout, Menu, notification } from "antd";
import {
  DashboardOutlined,
  CameraOutlined,
  BookOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayouts = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userRole = parseInt(localStorage.getItem("role"), 10);

  const logout = () => {
    localStorage.clear(); // Borra todos los datos del localStorage
    navigate("/LoginPage");
  };

  if (token === null) {
    notification.error({ message: "Debes iniciar sesión" },);
    setTimeout(() => {
      window.location.href = "#/LoginPage";
    }, 1000); // Redirige después de 1 segundo
  }else if (userRole === 1) {
    notification.error({ message: "No tienes los permisos" });
    setTimeout(() => navigate("/LoginPage"), 1000);
  }

  console.log(userRole);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} >
          <Menu.Item
            key="1"
            icon={<DashboardOutlined />}
            onClick={() => navigate("/DashboardHome")}
          >
            Home
          </Menu.Item>

          <Menu.Item
            key="2"
            icon={<UserOutlined />}
            onClick={() => navigate("/DashboardPersonajes")}
          >
            Personajes
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<BookOutlined />}
            onClick={() => navigate("/DashboardComics")}
          >
            Comics
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<CameraOutlined />}
            onClick={() => navigate("/DashboardPeliculas")}
          >
            Peliculas
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<LogoutOutlined />}
            onClick={() => logout()}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* Header */}
        <Header style={{ background: "#ADD8E6", padding: 0 }}>


        </Header>

        {/* Contenido dinámico */}
        <Content
          style={{ margin: "16px", padding: "16px", background: "#fff" }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayouts;