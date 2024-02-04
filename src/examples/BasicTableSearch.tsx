import DataJamTableFilters from "../components/tables/DataJamTableFilters";
import useSearchInput from "../hooks/useSearchInput";
import BasicTable from "./BasicTable";

interface BasicTableSearchProps {
  data?: any[][];
  columnHeaders?: { label: string; sortable?: boolean }[];
}

function BasicTableSearch(props: BasicTableSearchProps) {
  const { searchValue, onSearch } = useSearchInput();
  return (
    <>
      <DataJamTableFilters
        search={{
          label: "",
          value: searchValue,
          onSearch: (e) => onSearch(e.target.value),
        }}
      />
      <BasicTable />
    </>
  );
}

export default BasicTableSearch;
