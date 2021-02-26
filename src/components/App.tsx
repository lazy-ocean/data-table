import "../App.css";
import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "./table/Table";
import { getRows, getColumns, Data, Config } from "./data";
import { useStyles } from "./styled";
import Spinner from "./miscellaneous/Spinner";
import { TypographyError } from "./miscellaneous/typography";

const App = () => {
  const classes = useStyles();
  const [rows, setRowsData] = useState<Data[] | []>([]);
  const [columns, setColumnsData] = useState<Config[] | []>([]);
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);

  const getData = async () => {
    try {
      setLoading(true);
      const cols = await getColumns();
      setColumnsData(cols);
      const rowData = await getRows();
      setRowsData(rowData);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <TypographyError />
      ) : (
        <Paper>
          <Table rows={rows} columns={columns} setRowsData={setRowsData} />
        </Paper>
      )}
    </div>
  );
};
export default App;
