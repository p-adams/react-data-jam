import TableSearch from "../inputs/TableSearch";

interface DataJamTableFiltersProps {
  search: {
    label: string;
    value: string;
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}
function DataJamTableFilters(props: DataJamTableFiltersProps) {
  const { label, value, onSearch } = props.search;
  return (
    <>
      <TableSearch value={value} onSearch={(e) => onSearch(e)} label={label} />
    </>
  );
}

export default DataJamTableFilters;
