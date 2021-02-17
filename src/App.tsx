import "./App.css";
import { getRows, getColumns } from "./data";
import {
  StyledTableCell,
  StyledTableRow,
  StyledRedCell,
  StyledYellowCell,
  StyledTableSortLabel,
  useStyles,
  StyledEditButton,
  StyledFilterButton,
} from "./styled";
import { EditedRow } from "./editedRow";
import { FilterModal } from "./modal";

import React, { useEffect, useState } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import TablePagination from "@material-ui/core/TablePagination";
import Button from "@material-ui/core/Button";

const _ = require("lodash");

const App = () => {
  let Order: "asc" | "desc";

  let [rows, setRowsData] = useState<any[]>([]);
  let [columns, setColumnsData] = useState<any[]>([]);
  let [page, setPage] = React.useState(0);
  let [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const [order, setOrder] = React.useState<typeof Order>("asc");
  const [orderBy, setOrderBy] = React.useState("RN");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [checkedAll, checkAll] = React.useState<boolean>(false);
  const [edited, setEdited] = React.useState<string | false>(false);
  const [filterModal, openFilterModal] = React.useState<boolean>(false);

  const handleModalOpen = () => {
    openFilterModal(true);
  };

  const handleModalClose = () => {
    openFilterModal(false);
  };

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

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRows = e.target.value;
    setRowsPerPage(parseInt(newRows));
    setPage(0);
  };

  const classes = useStyles();
  const handleRequestSort = (field: string) => {
    setOrder(order === "asc" ? "desc" : "asc");
    setOrderBy(field);
  };

  function stableSort(array: any[]): any[] {
    // @ts-ignore
    let sorted = _.sortBy(array, function (obj) {
      return typeof obj[orderBy] === "string"
        ? obj[orderBy].toLowerCase()
        : obj[orderBy];
    });
    return order === "asc" ? sorted : sorted.reverse();
  }

  const handleEditing = (rowData: any) => {
    let newData = rows.map((row) => {
      if (row.id === edited) {
        return Object.keys(rowData).reduce((acc: any, key) => {
          acc[key] = rowData[key] ? rowData[key] : row[key];
          return acc;
        }, {});
      } else return row;
    });
    setRowsData(newData);
    setEdited(false);
  };

  let colsNames = columns.map((col) => col.field);
  let clients = rows.map((row) => row["CLIENT_NM"]);
  return (
    <div className={classes.root}>
      <FilterModal
        clients={clients}
        open={filterModal}
        onClose={handleModalClose}
      />
      <Paper className={classes.paper}>
        <TableContainer component={Paper}>
          <Table
            aria-label="simple table"
            className={classes.table}
            size={"small"}
            style={{ fontSize: "10px" }}
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
                    sortDirection={orderBy === column.field ? order : false}
                  >
                    <StyledTableSortLabel
                      id={column.id}
                      active={orderBy === column.field}
                      direction={orderBy === column.field ? order : "asc"}
                      onClick={() => handleRequestSort(column.field)}
                    >
                      {column.label}
                    </StyledTableSortLabel>
                  </StyledTableCell>
                ))}
                <StyledTableCell padding="checkbox"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(rows)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.id);
                  return edited !== row.id ? (
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
                            <StyledYellowCell key={_.uniqueId()}>
                              {row[field]}
                            </StyledYellowCell>
                          ) : (
                            <StyledRedCell key={_.uniqueId()}>
                              {row[field]}
                            </StyledRedCell>
                          );
                        } else {
                          return (
                            <TableCell key={_.uniqueId()}>
                              {row[field]}
                            </TableCell>
                          );
                        }
                      })}
                      <TableCell key={row.id} padding="checkbox">
                        <StyledEditButton
                          variant="outlined"
                          color="primary"
                          onClick={() => setEdited(row.id)}
                          disabled={edited !== false && edited !== row.id}
                        >
                          Edit
                        </StyledEditButton>
                      </TableCell>
                    </StyledTableRow>
                  ) : (
                    <EditedRow
                      row={row}
                      colsNames={colsNames}
                      saveData={(data: any) => handleEditing(data)}
                      clients={clients}
                      key={row.id}
                    ></EditedRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <Table>
          <TableBody>
            <TableRow style={{ display: "flex" }}>
              <TableCell
                align="left"
                style={{ flexGrow: 1, borderBottom: "none" }}
              >
                {selected.length
                  ? selected.length === 1
                    ? `1 item selected`
                    : `${selected.length} items selected`
                  : ""}
              </TableCell>
              <StyledFilterButton
                variant="contained"
                color="primary"
                onClick={handleModalOpen}
              >
                Filter
              </StyledFilterButton>
              <TablePagination
                count={rows.length}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                style={{ borderBottom: "none" }}
              />
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};
export default App;
