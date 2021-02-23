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
      light: "#D8EEFD",
      dark: "#BADCF3",
    },
    secondary: {
      main: "#5AA9E6",
    },
    warning: {
      main: "#FFE45E",
    },
    error: {
      main: "#F50049",
      contrastText: "#FFFFFF",
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: "14px",
      },
    },
    MuiCheckbox: {
      root: {
        color: "#5AA9E6",
      },
    },
    MuiTableFooter: {
      root: {
        display: "block",
      },
    },
    MuiTablePagination: {
      root: {
        borderBottom: "none",
      },
    },
    MuiDialogContent: {
      root: {
        paddingLeft: "15px",
        overflowY: "unset",
      },
    },
    MuiDialogTitle: {
      root: {
        padding: "15px",
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
      backgroundColor: theme.palette.primary.light,
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}))(TableRow);

export const StyledYellowCell = withStyles(() => ({
  body: {
    backgroundColor: theme.palette.warning.main,
  },
}))(TableCell);

export const StyledRedCell = withStyles(() => ({
  body: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}))(TableCell);

export const StyledFooterCell = withStyles(() => ({
  root: {
    borderBottom: "none",
    padding: "8px",
  },
}))(TableCell);

export const StyledTableSortLabel = withStyles(() => ({
  root: {
    fontSize: "14px",
    "&:hover, &:focus": {
      color: theme.palette.common.white,
    },
    "&.MuiTableSortLabel-active": {
      color: theme.palette.common.white,
    },
  },
  icon: {
    color: "inherit !important",
  },
}))(TableSortLabel);

export const StyledEditButton = withStyles(() => ({
  root: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
}))(Button);

export const StyledFilterButton = withStyles(() => ({
  root: {
    color: theme.palette.common.white,
    alignSelf: "center",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    marginRight: "10px",
  },
}))(Button);
