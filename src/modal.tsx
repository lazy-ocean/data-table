import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { EditingCells } from "./editedRow";

export const FilterModal = (props: any) => {
  let row = {
    DESCRIPTION: "",
    SOURCE_NM: "",
    CLIENT_NM: "",
    TERMINATION_DT: "2017-04",
    VALUE_3: null,
  };
  const { open, onClose, clients } = props;
  let [filters, setFilters] = useState(row);
  let colsNames = [
    "DESCRIPTION",
    "SOURCE_NM",
    "CLIENT_NM",
    "TERMINATION_DT",
    "VALUE_3",
  ];

  const handleDateChange = (date: Date | null) => {
    let month = (date!.getMonth() + 1).toString();
    let year = date?.getFullYear();
    let newDate = `${year}-${month.padStart(2, "0")}`;
    setFilters({ ...filters, TERMINATION_DT: newDate });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    let { name, value } = target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      PaperProps={{
        style: {
          width: 600,
          padding: "20px 30px",
        },
      }}
    >
      <DialogTitle id="form-dialog-title">Data filters</DialogTitle>
      <DialogContent>
        <DialogContentText>Choose fields to filter rows:</DialogContentText>
      </DialogContent>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <EditingCells
          colsNames={colsNames}
          values={filters}
          handleChange={handleChange}
          clients={clients}
          setValues={setFilters}
          handleDateChange={handleDateChange}
          row={row}
          type="form"
        />
      </div>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Filter
        </Button>
      </DialogActions>
    </Dialog>
  );
};
