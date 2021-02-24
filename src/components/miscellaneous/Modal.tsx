import React, { useState } from "react";
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

const FilterModal = (props: any) => {
  const row = {
    DESCRIPTION: "",
    SOURCE_NM: "",
    CLIENT_NM: null,
    TERMINATION_DT: null,
    VALUE_3: null,
  };
  const { open, onClose, clients, filterData } = props;
  const [filters, setFilters] = useState(row);
  const filtersFields = [
    "DESCRIPTION",
    "SOURCE_NM",
    "CLIENT_NM",
    "TERMINATION_DT",
    "VALUE_3",
  ];

  const handleClose = (arg: string) => {
    if (arg === "cancel") {
      setFilters(row);
      onClose();
    } else {
      setFilters(row);
      filterData(filters);
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
            {filtersFields.map((field: string) => (
              <EditingCell
                field={field}
                values={filters}
                handleChange={handleChange}
                clients={clients}
                setValues={setFilters}
                handleDateChange={handleDateChange}
                row={row}
                type="form"
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
        <Button onClick={() => handleClose("save")} color="primary">
          Filter
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterModal;
