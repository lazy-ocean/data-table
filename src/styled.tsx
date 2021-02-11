import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#5AA9E6",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#D8EEFD",
    },
  },
}))(TableRow);

export const StyledYellowCell = withStyles((theme) => ({
  body: {
    backgroundColor: "#FFE45E",
  },
}))(TableCell);

export const StyledRedCell = withStyles((theme) => ({
  body: {
    backgroundColor: "#F50049",
  },
}))(TableCell);