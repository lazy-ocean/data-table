import CircularProgress from "@material-ui/core/CircularProgress";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Spinner = () => {
  return (
    <TableRow>
      <TableCell colSpan={13}>
        <CircularProgress size={50} style={{ margin: "0 50%" }} />
      </TableCell>
    </TableRow>
  );
};

export default Spinner;
