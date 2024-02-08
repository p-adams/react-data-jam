import DataJamTable from "../components/tables/DataJamTable";
import "./BasicTable.css";

function BasicTable(props: DataJamTableProps) {
  const {
    actions,
    data = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    columnHeaders = [],
  } = props;
  return (
    <div className="basic-table-wrapper">
      <DataJamTable
        data={data}
        columnHeaders={columnHeaders}
        actions={actions}
        onToggleSort={props.onToggleSort}
      />
    </div>
  );
}

export default BasicTable;
