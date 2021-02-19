import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";

export const TypographySelected = (props: { selected: any[] }) => {
  let { selected } = props;
  return (
    <TableCell align="left" style={{ flexGrow: 1, borderBottom: "none" }}>
      {selected.length
        ? selected.length === 1
          ? `1 item selected`
          : `${selected.length} items selected`
        : ""}
    </TableCell>
  );
};

export const TypographyNoFilters = () => {
  return (
    <TableRow>
      <TableCell colSpan={13}>
        <Typography
          variant="h6"
          style={{ textAlign: "center", margin: "30px" }}
        >
          No items matching set filters
        </Typography>
      </TableCell>
    </TableRow>
  );
};
