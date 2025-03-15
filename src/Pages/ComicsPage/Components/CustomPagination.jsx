// CustomPagination.js
import React from 'react';
import { Pagination } from 'antd';

const CustomPagination = ({ currentPage, totalItems, pageSize, onPageChange }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Pagination
        current={currentPage}
        total={totalItems}
        pageSize={pageSize}
        onChange={onPageChange}
        itemRender={(page, type, originalElement) => {
          if (type === 'prev') {
            return <a>&lt;</a>;
          }
          if (type === 'next') {
            return <a>&gt;</a>;
          }
          return originalElement;
        }}
        style={{
          backgroundColor: "#f0f0f0",
          padding: "8px 16px",
          borderRadius: "4px",
          display: "inline-flex",
          alignItems: "center",
        }}
        prevIcon={null}
        nextIcon={null}
      />
    </div>
  );
};

export default CustomPagination;