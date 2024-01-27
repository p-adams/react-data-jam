import "./App.css";
import BasicTable from "./examples/BasicTable";

function App() {
  return (
    <>
      <div></div>
      <h1>React DataJam Demo</h1>
      <div className="card">
        <section>
          <h1>Basic Tables</h1>
          <section>
            <h3>Simple 3 x 3 Table</h3>
            <BasicTable />
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
