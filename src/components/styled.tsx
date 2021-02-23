import {
  withStyles,
  makeStyles,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Button from "@material-ui/core/Button";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    fontSize: "11px",
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
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: 14,
      },
    },
    MuiCheckbox: {
      root: {
        color: "#5AA9E6",
      },
    },
  },
});

export const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

export const StyledTableRow = withStyles(() => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#D8EEFD",
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "#BADCF3",
    },
  },
}))(TableRow);

export const StyledYellowCell = withStyles(() => ({
  body: {
    backgroundColor: "#FFE45E",
  },
}))(TableCell);

export const StyledRedCell = withStyles(() => ({
  body: {
    backgroundColor: "#F50049",
  },
}))(TableCell);

export const StyledTableSortLabel = withStyles(() => ({
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

export const StyledEditButton = withStyles(() => ({
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

export const StyledFilterButton = withStyles(() => ({
  root: {
    color: "white",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: "#5AA9E6",
    },
    marginRight: 10,
  },
}))(Button);
