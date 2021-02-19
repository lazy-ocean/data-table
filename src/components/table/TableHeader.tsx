import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { StyledTableCell, StyledTableSortLabel } from "../styled";
import Checkbox from "@material-ui/core/Checkbox";

const TableHeader = (props: any) => {
  let {
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
  );
};

export default TableHeader;
