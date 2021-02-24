import React, { useMemo } from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";
import TableBody from "./TableBody";
import { getRows, Data } from "../data";

let Order: "asc" | "desc";
const TableC = (props: any) => {
  const { rows, columns, setRowsData } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const [order, setOrder] = React.useState<typeof Order>("asc");
  const [orderBy, setOrderBy] = React.useState("RN");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [checkedAll, checkAll] = React.useState<boolean>(false);
  const [edited, setEdited] = React.useState<string | false>(false);
  const [activeFilter, toggleFilter] = React.useState<boolean>(false);

  const clients = useMemo(
    () => (rows as Data[]).map((row: Data) => row.CLIENT_NM),
    [rows]
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="simple table" size="small">
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
    </>
  );
};

export default TableC;
