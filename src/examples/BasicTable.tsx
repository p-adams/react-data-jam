import DataJamTable from "../components/tables/DataJamTable";
import "./BasicTable.css";

interface BasicTableProps {
  data?: any[][];
  actions?: { searchBy?: string; sortBy?: "ASC" | "DESC"; filterBy: string };
  columnHeaders?: { label: string; sortable?: boolean }[];
}

function BasicTable(props: BasicTableProps) {
  // TODO: APPLY ACTIONS TO DATA
  const {
    data = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    columnHeaders = [],
  } = props;
  return (
    <div className="basic-table-wrapper">
      <DataJamTable data={data} columnHeaders={columnHeaders} />
    </div>
  );
}

export default BasicTable;
