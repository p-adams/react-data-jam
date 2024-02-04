import { useState } from "react";

function useSearchInput() {
  const [value, setValue] = useState("");
  return {
    onSearch: setValue,
    searchValue: value,
  };
}

export default useSearchInput;
