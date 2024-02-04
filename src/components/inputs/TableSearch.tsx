interface TableSearchProps {
  label: string;
  value: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TableSearch(props: TableSearchProps) {
  const { label, onSearch, value } = props;
  return (
    <div className="table-search-wrapper">
      <input value={value} onChange={(e) => onSearch(e)} />
      {label && <label>{label}</label>}
    </div>
  );
}

export default TableSearch;
