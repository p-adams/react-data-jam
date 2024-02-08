import { useState } from "react";
import DataJamTableFilters from "../components/tables/DataJamTableFilters";
import useSearchInput from "../hooks/useSearchInput";
import BasicTable from "./BasicTable";

function BasicTableSearch(_props: DataJamTableProps) {
  const { searchValue, onSearch } = useSearchInput();
  const [sortBy, setSortBy] = useState<SortDir>("ASC");
  function handleToggleSort(_header: ColumnHeader) {
    const sortDir = sortBy === "ASC" ? "DESC" : "ASC";
    setSortBy(sortDir);
  }
  return (
    <>
      <DataJamTableFilters
        search={{
          label: "",
          value: searchValue,
          onSearch: (e) => onSearch(e.target.value),
        }}
      />
      <BasicTable
        actions={{ searchBy: searchValue, sortBy: sortBy }}
        onToggleSort={(header) => handleToggleSort(header)}
      />
    </>
  );
}

export default BasicTableSearch;
