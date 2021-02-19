import React, { useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import { StyledEditButton } from "../styled";

import { EditingCells } from "./EditingCells";

const EditedRow = (props: any) => {
  let { row, colsNames, saveData, clients } = props;
  let [values, setValues] = useState(row);

  const handleDateChange = (date: Date | null) => {
    let month = (date!.getMonth() + 1).toString();
    let year = date?.getFullYear();
    let newDate = `${year}-${month.padStart(2, "0")}`;
    setValues({ ...values, TERMINATION_DT: newDate });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    let { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  return (
    <TableRow key={row.id}>
      <TableCell padding="checkbox">
        <Checkbox style={{ color: "#5AA9E6" }} disabled />
      </TableCell>
      <EditingCells
        colsNames={colsNames}
        values={values}
        handleChange={handleChange}
        clients={clients}
        setValues={setValues}
        handleDateChange={handleDateChange}
        row={row}
        type="table"
      />
      <TableCell key={row.id} padding="checkbox">
        <StyledEditButton
          variant="contained"
          color="primary"
          onClick={() => saveData(values)}
        >
          Save
        </StyledEditButton>
      </TableCell>
    </TableRow>
  );
};

export default EditedRow;
