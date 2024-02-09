import { useEffect, useMemo, useState } from "react";
import "./DataJamTable.css";

function DataJamTable(props: DataJamTableProps) {
  const { actions, data } = props;
  if (!data) {
    return null;
  }

  // State to track sort direction for each column
  const [sortDirections, setSortDirections] = useState<{
    [key: number]: SortDir;
  }>({});

  const [tableData, setTableData] = useState<TableData>(data);

  useEffect(() => {
    if (actions?.searchBy) {
      setTableData(
        data.filter((row) => {
          return row.some((cell) => {
            const cellString = cell.toString();
            return cellString.includes(actions.searchBy);
          });
        })
      );
    } else {
      setTableData(data);
    }
  }, [actions?.searchBy]);

  const [columns, rows] = useMemo(() => {
    const numColumns = data.length > 0 ? data[0].length : 0;
    const numRows = data.length;
    return [
      Array.from({ length: numColumns }, (_, index) => index),
      Array.from({ length: numRows }, (_, index) => index),
    ];
  }, [data]);

  function toggleSort(header: ColumnHeader) {
    if (props.onToggleSort) {
      props.onToggleSort(header);
      return;
    }

    // Find the index of the clicked column header
    const columnIndex = props.columnHeaders?.findIndex((col) => col === header);
    if (columnIndex !== -1 && columnIndex !== undefined) {
      // Determine the sort direction for the clicked column
      const currentSortDirection = sortDirections[columnIndex];
      const newSortDirection = currentSortDirection === "ASC" ? "DESC" : "ASC";

      // Sort the data array based on the clicked column and sort direction
      const sortedData = [...tableData].sort((row1, row2) => {
        const value1 = row1[columnIndex];
        const value2 = row2[columnIndex];
        if (value1 < value2) return newSortDirection === "ASC" ? -1 : 1;
        if (value1 > value2) return newSortDirection === "ASC" ? 1 : -1;
        return 0;
      });

      // Update the sort direction state for the clicked column
      setSortDirections({ ...sortDirections, [columnIndex]: newSortDirection });
      // Update the data array with the sorted data
      setTableData(sortedData);
    }
  }

  const defaultGridTemplateColumns = `repeat(${tableData.length}, 1fr)`;

  if (tableData.length === 0) {
    return <div>Not found</div>;
  }

  return (
    <div
      className="datajam-table-wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: `var(--datajam-table-columns, ${defaultGridTemplateColumns})`,
      }}
    >
      {props.columnHeaders && (
        <>
          {props.columnHeaders.map((header, index) => (
            <div key={index} className="data-header">
              <div>{header.label}</div>
              {props.actions?.sortBy && (
                <div
                  onClick={() => toggleSort(header)}
                  className={
                    sortDirections[index] === "ASC" ? "sort-asc" : "sort-desc"
                  }
                >
                  {sortDirections[index] === "ASC" ? "sort" : "unsort"}
                </div>
              )}
            </div>
          ))}
        </>
      )}
      {rows.map((row) =>
        columns.map((col) => (
          <div key={`${row}-${col}`} className="data-cell">
            {tableData?.[row]?.[col] && <div>{tableData?.[row]?.[col]}</div>}
          </div>
        ))
      )}
    </div>
  );
}

export default DataJamTable;
