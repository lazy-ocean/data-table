import "./App.css";
import { getRows, getColumns } from "./data";
import {
  StyledTableCell,
  StyledTableRow,
  StyledRedCell,
  StyledYellowCell,
} from "./styled";

import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import TablePagination from "@material-ui/core/TablePagination";
import TableSortLabel from "@material-ui/core/TableSortLabel";
const _ = require("lodash");

const App = () => {
  let Order: "asc" | "desc";

  let [rows, setRowsData] = useState<any[]>([]);
  let [columns, setColumnsData] = useState<any[]>([]);
  let [page, setPage] = React.useState(0);
  let [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [order, setOrder] = React.useState<typeof Order>("asc");
  const [orderBy, setOrderBy] = React.useState("#");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [checkedAll, checkAll] = React.useState<boolean>(false);

  useEffect(() => {
    const colsData = async () => {
      let cols = await getColumns();
      setColumnsData(cols);
    };
    const rowsData = async () => {
      let row = await getRows();
      setRowsData(row);
    };
    colsData();
    rowsData();
  }, []);

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const handleSelectAllClick = () => {
    if (!checkedAll) {
      const newSelected = rows.map((n) => n.id);
      checkAll(true);
      setSelected(newSelected);
    } else {
      checkAll(false);
      setSelected([]);
    }
  };

  const handleSelect = (id: string) => {
    if (selected.includes(id)) {
      let filtered = selected.filter((item) => item !== id);
      setSelected(filtered);
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  }));
  const classes = useStyles();
  const handleRequestSort = (field: string) => {
    const isAsc = orderBy === field && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(field);
  };

  function stableSort(array: any[]): any[] {
    // @ts-ignore
    let sorted = _.sortBy(array, function (obj) {
      return obj[orderBy];
    });
    return order === "asc" ? sorted : sorted.reverse();
  }

  let colsNames = columns.map((col) => col.field);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer component={Paper}>
          <Table
            aria-label="simple table"
            className={classes.table}
            size={"small"}
          >
            <TableHead>
              <TableRow>
                <StyledTableCell padding="checkbox">
                  <Checkbox
                    inputProps={{ "aria-label": "select all" }}
                    style={{ color: "white" }}
                    checked={checkedAll}
                    onClick={() => handleSelectAllClick()}
                  />
                </StyledTableCell>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    id={column.id}
                    width={column.width}
                    sortDirection={orderBy === column.id ? order : false}
                  >
                    <TableSortLabel
                      id={column.id}
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : "asc"}
                      onClick={() => handleRequestSort(column.field)}
                    >
                      {column.label}
                    </TableSortLabel>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(rows)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.id);
                  return (
                    <StyledTableRow key={row.id} selected={isItemSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          style={{ color: "#5AA9E6" }}
                          checked={isItemSelected}
                          onClick={() => handleSelect(row.id)}
                        />
                      </TableCell>
                      {colsNames.map((field) => {
                        if (field === "VALUE_1" && row[field] > 2000) {
                          return row[field] < 3000 ? (
                            <StyledYellowCell>{row[field]}</StyledYellowCell>
                          ) : (
                            <StyledRedCell>{row[field]}</StyledRedCell>
                          );
                        } else {
                          return <TableCell>{row[field]}</TableCell>;
                        }
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TableRow style={{ display: "flex", justifyContent: "space-between" }}>
          {selected.length ? (
            <TableCell align="right">
              {selected.length === 1
                ? `1 item selected`
                : `${selected.length} items selected`}
            </TableCell>
          ) : null}
          <TablePagination
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            style={{ flexGrow: 1 }}
          />
        </TableRow>
      </Paper>
    </div>
  );
};
export default App;
