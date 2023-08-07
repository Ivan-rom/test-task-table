import Select from "./components/Select/Select";
import Table from "./components/Table/Table";
import "./css/style.css";
import { useEffect, useState } from "react";

function App() {
  const [currentTable, setCurrentTable] = useState({});
  const [tableNames, setTableNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/names")
      .then((res) => res.json())
      .then((names) => {
        setTableNames(names);
        fetch(`http://localhost:3000/${names[0]}`)
          .then((res) => res.json())
          .then((table) => setCurrentTable(table));
      });
  }, []);

  function tableChange(tableName) {
    fetch(`http://localhost:3000/${tableName}`)
      .then((res) => res.json())
      .then((data) => setCurrentTable(data));
  }

  return (
    <>
      <Select tableNames={tableNames} tableChange={tableChange} />
      {Object.keys(currentTable).length !== 0 && <Table table={currentTable} />}
    </>
  );
}

export default App;
