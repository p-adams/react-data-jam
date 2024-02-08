import { useMemo, useState } from "react";
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

  const search = useMemo<TableData[]>(() => {
    if (!actions?.searchBy) {
      return data;
    }
    return data.filter((row) => {
      return row.some((cell) => {
        const cellString = cell.toString();
        return cellString.includes(actions.searchBy);
      });
    });
  }, [actions?.searchBy, data]);

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
    // Toggle sort direction for the clicked column
    const columnIndex = props.columnHeaders?.findIndex((col) => col === header);
    if (columnIndex !== -1 && columnIndex !== undefined) {
      const currentSortDirection = sortDirections[columnIndex];
      const newSortDirection = currentSortDirection === "ASC" ? "DESC" : "ASC";
      setSortDirections({ ...sortDirections, [columnIndex]: newSortDirection });
    }
  }

  const defaultGridTemplateColumns = `repeat(${search.length}, 1fr)`;

  if (search.length === 0) {
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
            {search?.[row]?.[col] && <div>{search?.[row]?.[col]}</div>}
          </div>
        ))
      )}
    </div>
  );
}

export default DataJamTable;
