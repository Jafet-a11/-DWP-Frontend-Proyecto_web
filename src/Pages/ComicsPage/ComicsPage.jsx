// ComicsGrid.js
import React, { useState } from "react";
import { Card, Row, Col, Layout } from "antd";
import Header from '../../Layouts/headear';
import '../../App.css';
import Foooter from '../../Layouts/footer';
import { Content } from "antd/es/layout/layout";
import CustomPagination from "./Components/CustomPagination";
import { Link } from 'react-router-dom'; // Importa Link

const comicsData = [
  { id: 1, title: "Comic 1" },
  { id: 2, title: "Comic 2" },
  { id: 3, title: "Comic 3" },
  { id: 4, title: "Comic 4" },
  { id: 5, title: "Comic 5" },
  { id: 6, title: "Comic 1" },
  { id: 7, title: "Comic 2" },
  { id: 8, title: "Comic 3" },
  { id: 9, title: "Comic 4" },
  { id: 10, title: "Comic 5" },
];

const itemsPerPage = 10;

const ComicsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedComics = comicsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Layout>
      <Header />
      <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <Row gutter={[16, 16]} justify="center">
            {displayedComics.map((comic) => (
              <Col key={comic.id} xs={12} sm={8} md={6} lg={4}>
                <Link to="/Comics/InfoComics"> {/* Usa Link para crear un enlace */}
                  <Card
                    style={{
                      width: 130,
                      height: 160,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid black",
                    }}
                  >
                    {comic.title}
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          <CustomPagination
            currentPage={currentPage}
            totalItems={comicsData.length}
            pageSize={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </Content>
      <Foooter />
    </Layout>
  );
};

export default ComicsGrid;