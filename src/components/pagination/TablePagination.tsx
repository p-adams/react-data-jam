import React, { useState } from "react";
import "./TablePagination.css";
const TablePagination = ({ data, itemsPerPage, onPageChange }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  return (
    <nav>
      <ul className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
          >
            <div onClick={() => handleClick(index + 1)}>{index + 1}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TablePagination;
