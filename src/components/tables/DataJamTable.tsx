import { useMemo } from "react";
import "./DataJamTable.css";

function DataJamTable(props: DataJamTableProps) {
  // TODO: APPLY ACTIONS TO DATA
  const { actions, data } = props;
  if (!data) {
    return null;
  }
  const search = useMemo<TableData[]>(() => {
    if (!actions?.searchBy) {
      return data;
    }
    return data.filter((row) => {
      return row.some((cell) => {
        // Convert cell to string if it's not already
        const cellString = cell.toString();
        return cellString.includes(actions.searchBy);
      });
    });
  }, [actions?.searchBy]);

  const [columns, rows] = useMemo(() => {
    const numColumns = data.length > 0 ? data[0].length : 0;
    const numRows = data.length;
    return [
      Array.from({ length: numColumns }, (_, index) => index),
      Array.from({ length: numRows }, (_, index) => index),
    ];
  }, [data]);
  const defaultGridTemplateColumns = `repeat(${search.length}, 1fr)`;
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
                <div>sort {/* TODO: replace with icon*/}</div>
              )}
            </div>
          ))}
        </>
      )}
      {search.length ? (
        rows.map((row) =>
          columns.map((col) => (
            <div key={`${row}-${col}`} className="data-cell">
              {search?.[row]?.[col] && <div>{search?.[row]?.[col]}</div>}
            </div>
          ))
        )
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
}

export default DataJamTable;
