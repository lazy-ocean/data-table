import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

const Cell = withStyles(() => ({
  root: {
    borderBottom: "none",
  },
}))(TableCell);

export const TypographySelected = (props: { selected: any[] }) => {
  const { selected } = props;
  return (
    <Cell align="left">
      <Typography variant="subtitle1">
        {selected.length
          ? selected.length === 1
            ? `1 item selected`
            : `${selected.length} items selected`
          : ""}
      </Typography>
    </Cell>
  );
};

export const TypographyNoFilters = () => (
  <TableRow>
    <TableCell colSpan={13}>
      <Typography variant="h3">No items matching set filters</Typography>
    </TableCell>
  </TableRow>
);
