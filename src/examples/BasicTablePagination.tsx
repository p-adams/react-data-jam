import BasicTable from "./BasicTable";

function BasicTablePaginatiion(_props: DataJamTableProps) {
  return (
    <>
      <BasicTable
        columnHeaders={[{ label: "A" }, { label: "B" }, { label: "C" }]}
        data={[[]]}
      />
    </>
  );
}

export default BasicTablePaginatiion;
