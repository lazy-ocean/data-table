import "../App.css";
import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "./table/Table";
import { getRows, getColumns, Data, Config } from "./data";
import { useStyles } from "./styled";

const App = () => {
  const classes = useStyles();
  const [rows, setRowsData] = useState<Data[] | []>([]);
  const [columns, setColumnsData] = useState<Config[] | []>([]);

  useEffect(() => {
    (async () => {
      const cols = await getColumns();
      setColumnsData(cols);
      const rowData = await getRows();
      setRowsData(rowData);
    })();
  }, []);

  return (
    <div className={classes.root}>
      <Paper>
        <Table rows={rows} columns={columns} setRowsData={setRowsData} />
      </Paper>
    </div>
  );
};
export default App;
