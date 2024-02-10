import React, { useState } from "react";

interface TablePaginationProps {
  data: any[][];
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const TablePagination = ({
  data,
  itemsPerPage,
  onPageChange,
}: TablePaginationProps) => {
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
            <a onClick={() => handleClick(index + 1)} href="!#">
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TablePagination;
