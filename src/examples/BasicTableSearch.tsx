import DataJamTableFilters from "../components/tables/DataJamTableFilters";
import useSearchInput from "../hooks/useSearchInput";
import BasicTable from "./BasicTable";

function BasicTableSearch(props: DataJamTableProps) {
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
      <BasicTable actions={{ searchBy: searchValue }} />
    </>
  );
}

export default BasicTableSearch;
