import "../App.css";
import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import { getRows, getColumns } from "./data";
import { useStyles } from "./styled";
import TableHeader from "./table/TableHeader";
import TableFooter from "./table/TableFooter";
import TableBody from "./table/TableBody";

let Order: "asc" | "desc";

const App = () => {
  const classes = useStyles();
  const [rows, setRowsData] = useState<any[]>([]);
  const [columns, setColumnsData] = useState<any[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const [order, setOrder] = React.useState<typeof Order>("asc");
  const [orderBy, setOrderBy] = React.useState("RN");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [checkedAll, checkAll] = React.useState<boolean>(false);
  const [edited, setEdited] = React.useState<string | false>(false);
  const [activeFilter, toggleFilter] = React.useState<boolean>(false);

  useEffect(() => {
    const colsData = async () => {
      const cols = await getColumns();
      setColumnsData(cols);
    };
    const rowsData = async () => {
      const row = await getRows();
      setRowsData(row);
    };
    colsData();
    rowsData();
  }, []);

  const clients = rows.map((row) => row.CLIENT_NM);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer component={Paper}>
          <Table
            aria-label="simple table"
            className={classes.table}
            size="small"
            style={{ fontSize: "10px" }}
          >
            <TableHeader
              columns={columns}
              rows={rows}
              order={order}
              orderBy={orderBy}
              checkAll={checkAll}
              checkedAll={checkedAll}
              setOrder={setOrder}
              setOrderBy={setOrderBy}
              setSelected={setSelected}
            />
            <TableBody
              rows={rows}
              orderBy={orderBy}
              order={order}
              page={page}
              rowsPerPage={rowsPerPage}
              edited={edited}
              selected={selected}
              setEdited={setEdited}
              columns={columns}
              setRowsData={setRowsData}
              clients={clients}
              activeFilter={activeFilter}
              setSelected={setSelected}
            />
          </Table>
        </TableContainer>
        <TableFooter
          rows={rows}
          rowsPerPage={rowsPerPage}
          selected={selected}
          edited={edited}
          activeFilter={activeFilter}
          getRows={getRows}
          setRowsData={setRowsData}
          toggleFilter={toggleFilter}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          clients={clients}
        />
      </Paper>
    </div>
  );
};
export default App;
