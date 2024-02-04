interface TableSearchProps {
  label: string;
  value: string;
  onSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TableSearch(props: TableSearchProps) {
  const { label, onSearchInput, value } = props;
  return (
    <div className="table-search-wrapper">
      <input value={value} onChange={(e) => onSearchInput(e)} />
      {label && <label>{label}</label>}
    </div>
  );
}

export default TableSearch;
