interface DataJamTableProps {
  data?: any[][];
  actions?: { searchBy?: string; sortBy?: "ASC" | "DESC"; filterBy?: string };
  columnHeaders?: { label: string }[];
}
