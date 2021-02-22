import {
  withStyles,
  makeStyles,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Button from "@material-ui/core/Button";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontSize: "11px",
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
  subtitle1: {
    paddingBottom: "15px",
  },
}));

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5AA9E6",
    },
  },
});

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#D8EEFD",
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "#BADCF3",
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

export const StyledTableSortLabel = withStyles((theme) => ({
  root: {
    fontSize: "14px",
    "&:hover, &:focus": {
      color: "white",
    },
    "&.MuiTableSortLabel-active": {
      color: "white",
    },
  },
  icon: {
    color: "inherit !important",
  },
}))(TableSortLabel);

export const StyledEditButton = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    backgroundColor: "white",
    border: "1px solid #5AA9E6",
    "&:hover": {
      backgroundColor: "#d9efff",
      border: "1px solid #5AA9E6",
    },
  },
}))(Button);

export const StyledFilterButton = withStyles((theme) => ({
  root: {
    color: "white",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: "#5AA9E6",
    },
    marginRight: 10,
  },
}))(Button);