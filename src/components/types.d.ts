type TableData = any[][];

type ColumnHeader = { label: string };

type SortDir = "ASC" | "DESC";

interface DataJamTableProps {
  data?: TableData;
  actions?: {
    searchBy?: string;
    sortBy?: "ASC" | "DESC";
  };
  columnHeaders?: ColumnHeader[];
  onToggleSort?: (header: ColumnHeader) => void;
}
