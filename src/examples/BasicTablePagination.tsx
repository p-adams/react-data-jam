import { useEffect, useState } from "react";
import TablePagination from "../components/pagination/TablePagination";
import BasicTable from "./BasicTable";

function BasicTablePaginatiion(_props: DataJamTableProps) {
  const [currentPageData, setCurrentPageData] = useState<number[][]>([]);
  const [data, _] = useState<number[][]>([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  const itemsPerPage = 2;

  const handlePageChange = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentPageData(data.slice(startIndex, endIndex));
  };
  useEffect(() => {
    handlePageChange(1);
  }, []);
  return (
    <>
      <TablePagination
        data={data}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
      <BasicTable
        columnHeaders={[{ label: "A" }, { label: "B" }, { label: "C" }]}
        data={currentPageData}
      />
    </>
  );
}

export default BasicTablePaginatiion;
