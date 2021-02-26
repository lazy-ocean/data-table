import React, { useMemo } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import _ from "lodash";
import { StyledTableRow, StyledEditButton } from "../styled";
import EditingRow from "../editingComponents/EditingRow";
import { TypographyNoFilters } from "../miscellaneous/typography";
import Spinner from "../miscellaneous/Spinner";
import ConditionalCell from "./ConditionalCell";
import { conditionalCellsUtils } from "../utils";

const stableSort = (array: any[], orderBy: string, order: string): any[] => {
  // @ts-ignore
  const sorted = _.sortBy(array, (obj) =>
    typeof obj[orderBy] === "string" ? obj[orderBy].toLowerCase() : obj[orderBy]
  );
  return order === "asc" ? sorted : sorted.reverse();
};

const TableBodyC = (props: any) => {
  const {
    rows,
    orderBy,
    order,
    page,
    rowsPerPage,
    edited,
    setSelected,
    selected,
    columns,
    setEdited,
    setRowsData,
    clients,
    activeFilter,
  } = props;

  const columnsInfo = useMemo(
    () => columns.map((col: any) => ({ field: col.field, type: col.type })),
    [columns]
  );

  const handleSelect = (id: string) => {
    if (selected.includes(id)) {
      const filtered = selected.filter((item: string) => item !== id);
      setSelected(filtered);
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleEditing = (rowData: any) => {
    const newData = rows.map((row: any) => {
      if (row.id === edited) {
        return Object.keys(rowData).reduce((acc: any, key) => {
          acc[key] = rowData[key] ? rowData[key] : row[key];
          return acc;
        }, {});
      }
      return row;
    });
    setRowsData(newData);
    setEdited(false);
  };

  return (
    <TableBody>
      {rows.length ? (
        stableSort(rows, orderBy, order)
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) =>
            edited !== row.id ? (
              <StyledTableRow
                key={row.id}
                selected={selected.indexOf(row.id) !== -1}
              >
                <TableCell padding="checkbox" key={`checkbox-${row.id}`}>
                  <Checkbox
                    checked={selected.indexOf(row.id) !== -1}
                    onClick={() => handleSelect(row.id)}
                  />
                </TableCell>
                {(columnsInfo as Array<{ field: string; type: string }>).map(
                  ({ field, type }) =>
                    Object.keys(conditionalCellsUtils).includes(field) ? (
                      <ConditionalCell
                        value={row[field]}
                        id={row.id}
                        field={field}
                      />
                    ) : (
                      <TableCell
                        key={`${field}-${row.id}`}
                        align={type === "NUMERIC" ? "right" : "left"}
                      >
                        {row[field]}
                      </TableCell>
                    )
                )}
                <TableCell key={`edit-${row.id}`} padding="checkbox">
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
              <EditingRow
                row={row}
                columnsInfo={columnsInfo}
                saveData={(data: any) => handleEditing(data)}
                clients={clients}
                key={row.id}
              />
            )
          )
      ) : activeFilter ? (
        <TypographyNoFilters />
      ) : (
        <Spinner />
      )}
    </TableBody>
  );
};

export default TableBodyC;
