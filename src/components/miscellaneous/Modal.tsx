import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import EditingCell from "../editingComponents/EditingCells";
import { StyledModalTableRow } from "../styled";
import { filtersFieldsUtils } from "../utils";

const FilterModal = (props: any) => {
  const {
    open,
    onClose,
    clients,
    filterData,
    filters,
    setFilters,
    row,
  } = props;

  const handleClose = (arg: string) => {
    if (arg === "cancel") {
      onClose();
    } else {
      filterData();
    }
  };

  const handleDateChange = (date: Date | null) => {
    const month = (date!.getMonth() + 1).toString();
    const year = date?.getFullYear();
    const newDate = `${year}-${month.padStart(2, "0")}`;
    // @ts-ignore
    setFilters({ ...filters, TERMINATION_DT: newDate });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setFilters({ ...filters, [name]: value });
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="form-dialog-title">Data filters</DialogTitle>
      <DialogContent>
        <DialogContentText>Choose fields to filter rows:</DialogContentText>
      </DialogContent>
      <Table>
        <TableBody>
          <StyledModalTableRow>
            {filtersFieldsUtils.map((field: string) => (
              <EditingCell
                field={field}
                values={filters}
                handleChange={handleChange}
                clients={clients}
                setValues={setFilters}
                handleDateChange={handleDateChange}
                row={row}
                view="form"
                key={field}
              />
            ))}
          </StyledModalTableRow>
        </TableBody>
      </Table>
      <DialogActions>
        <Button onClick={() => handleClose("cancel")} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => handleClose("save")}
          color="primary"
          type="submit"
        >
          Filter
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterModal;
