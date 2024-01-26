import "./App.css";
import DataJamTable from "./components/DataJamTable";

function App() {
  return (
    <>
      <div></div>
      <h1>React DataJam Demo</h1>
      <div className="card">
        <DataJamTable
          data={[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ]}
        />
      </div>
      <p className="read-the-docs">
        Click <a href="#">here</a> to learn more
      </p>
    </>
  );
}

export default App;
