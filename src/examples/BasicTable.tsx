import DataJamTable from "../components/DataJamTable";

interface BasicTableProps {
  data?: any[][];
  columnHeaders?: string[];
}

function BasicTable(props: BasicTableProps) {
  const {
    data = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    columnHeaders = [],
  } = props;
  return <DataJamTable data={data} columnHeaders={columnHeaders} />;
}

export default BasicTable;
