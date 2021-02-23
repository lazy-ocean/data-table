import React, { useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import { StyledEditButton } from "../styled";

import EditingCell from "./EditingCells";

const EditingRow = (props: any) => {
  const { row, colsNames, saveData, clients } = props;
  const [values, setValues] = useState(row);

  const handleDateChange = (date: Date | null) => {
    const month = (date!.getMonth() + 1).toString();
    const year = date?.getFullYear();
    const newDate = `${year}-${month.padStart(2, "0")}`;
    setValues({ ...values, TERMINATION_DT: newDate });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  return (
    <TableRow key={row.id}>
      <TableCell key="checkbox" padding="checkbox">
        <Checkbox disabled />
      </TableCell>
      {colsNames.map((field: string) => (
        <EditingCell
          field={field}
          values={values}
          handleChange={handleChange}
          clients={clients}
          setValues={setValues}
          handleDateChange={handleDateChange}
          row={row}
          type="table"
          key={field}
        />
      ))}
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

export default EditingRow;
