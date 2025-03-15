// Pagination.js
import React from 'react';
import { Pagination as AntPagination } from 'antd';

const Pagination = ({ current, total, onChange }) => {
  return <AntPagination current={current} total={total} onChange={onChange} />;
};

export default Pagination;