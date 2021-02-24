import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import { StyledTableCell, StyledTableSortLabel } from "../styled";

const TableHeader = (props: any) => {
  const {
    columns,
    rows,
    orderBy,
    order,
    setOrder,
    setOrderBy,
    checkedAll,
    checkAll,
    setSelected,
  } = props;

  const handleRequestSort = (field: string) => {
    setOrder(order === "asc" ? "desc" : "asc");
    setOrderBy(field);
  };

  const handleSelectAllClick = () => {
    if (!checkedAll) {
      const newSelected = rows.map((n: any) => n.id);
      checkAll(true);
      setSelected(newSelected);
    } else {
      checkAll(false);
      setSelected([]);
    }
  };

  return (
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
        {columns.map((column: any) => (
          <StyledTableCell
            key={column.id}
            id={column.id}
            align={column.type === "NUMERIC" ? "right" : "left"}
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
        <StyledTableCell padding="checkbox" />
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
