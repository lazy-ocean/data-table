import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

import "./App.css";
import { getRows, getColumns } from "./data";

const App = () => {
  let [rows, setRowsData] = useState([]);
  let [columns, setColumnsData] = useState([]);

  useEffect(() => {
    const colsData = async () => {
      let cols = await getColumns();
      console.log(cols);
      setColumnsData(cols);
    };
    const rowsData = async () => {
      let row = await getRows();
      setRowsData(row);
    };
    colsData();
    rowsData();
  }, []);

  return (
    <div className="App" style={{ height: 650, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
};

export default App;
