import React, { useMemo } from "react";

interface DataJamProps {
  data: any[][]; // Adjust the type as per your data structure
}

function DataJamTable(props: DataJamProps) {
  const { data } = props;

  const [columns, rows] = useMemo(() => {
    const numColumns = data.length > 0 ? data[0].length : 0;
    const numRows = data.length;
    return [
      Array.from({ length: numColumns }, (_, index) => index),
      Array.from({ length: numRows }, (_, index) => index),
    ];
  }, [data]);

  return (
    <div
      className="datajam-table-wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
      }}
    >
      {columns.map((col) =>
        rows.map((row) => (
          <div key={`${row}-${col}`}>{props.data[row][col]}</div>
        ))
      )}
    </div>
  );
}

export default DataJamTable;
