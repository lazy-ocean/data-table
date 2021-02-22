import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import _ from "lodash";
import {
  StyledTableRow,
  StyledRedCell,
  StyledYellowCell,
  StyledEditButton,
} from "../styled";
import EditedRow from "../editedComponents/EditedRow";
import { TypographyNoFilters } from "../miscellaneous/typography";
import Spinner from "../miscellaneous/Spinner";

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

  function stableSort(array: any[]): any[] {
    // @ts-ignore
    const sorted = _.sortBy(array, (obj) =>
      typeof obj[orderBy] === "string"
        ? obj[orderBy].toLowerCase()
        : obj[orderBy]
    );
    return order === "asc" ? sorted : sorted.reverse();
  }

  const colsNames = columns.map((col: any) => col.field);
  const isSelected = (id: string) => selected.indexOf(id) !== -1;

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
        stableSort(rows)
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
                {colsNames.map((field: string) => {
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
                  }
                  return <TableCell key={_.uniqueId()}>{row[field]}</TableCell>;
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
              />
            );
          })
      ) : activeFilter ? (
        <TypographyNoFilters />
      ) : (
        <Spinner />
      )}
    </TableBody>
  );
};

export default TableBodyC;
