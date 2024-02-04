import "./App.css";
import BasicTable from "./examples/BasicTable";
import BasicTableSearch from "./examples/BasicTableSearch";

function App() {
  return (
    <>
      <div></div>
      <h1>React DataJam Demo</h1>
      <div className="card">
        <section className="demo-section-wrapper">
          <h1>Basic Tables</h1>
          <section className="demo-section">
            <h3>Simple 3 x 3 Table</h3>
            <BasicTable />
          </section>
          <section className="demo-section">
            <h3>Simple 3 x 3 Table W/Column Labels</h3>
            <BasicTable
              columnHeaders={[{ label: "A" }, { label: "B" }, { label: "C" }]}
            />
          </section>
          <section className="demo-section">
            <h3>Simple 3 x 3 Table W/Search </h3>
            <BasicTableSearch
              columnHeaders={[{ label: "A" }, { label: "B" }, { label: "C" }]}
            />
          </section>
        </section>
      </div>
      <p className="read-the-docs">
        Click <a href="#">here</a> to learn more
      </p>
    </>
  );
}

export default App;
