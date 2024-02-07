type TableData = any[][];

interface DataJamTableProps {
  data?: TableData;
  actions?: { searchBy?: string; sortBy?: "ASC" | "DESC"; filterBy?: string };
  columnHeaders?: { label: string }[];
}
