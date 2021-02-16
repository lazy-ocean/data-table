import React, { useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { StyledEditButton } from "./styled";
const _ = require("lodash");

const sourceMap = ["DEV", "UAT", "PROD"];

export const EditedRow = (props: any) => {
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
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  return (
    <TableRow key={row.id}>
      <TableCell padding="checkbox">
        <Checkbox style={{ color: "#5AA9E6" }} disabled />
      </TableCell>
      {colsNames.map((field: string) => {
        switch (field) {
          case "DESCRIPTION":
            return (
              <TableCell key="edit_1">
                <TextField
                  defaultValue={values[field]}
                  name={field}
                  size="small"
                  id="input-descr"
                  style={{ fontSize: "11px" }}
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  onChange={handleChange}
                />
              </TableCell>
            );
          case "SOURCE_NM":
            return (
              <TableCell key="edit_2">
                <TextField
                  id="select-source"
                  select
                  defaultValue={values[field]}
                  name={field}
                  onChange={handleChange}
                  InputProps={{ style: { fontSize: 14 } }}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {sourceMap.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </TextField>
              </TableCell>
            );
          case "CLIENT_NM":
            return (
              <TableCell key="edit_3">
                <Autocomplete
                  id="client-picker"
                  size="small"
                  options={clients}
                  onChange={(e, newValue) =>
                    setValues({ ...values, [field]: newValue })
                  }
                  defaultValue={values[field]}
                  getOptionLabel={(option: string) => option}
                  style={{ width: 100, fontSize: 14 }}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                />
              </TableCell>
            );
          case "TERMINATION_DT":
            return (
              <TableCell key="edit_4">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    variant="inline"
                    openTo="year"
                    name={field}
                    views={["year", "month"]}
                    value={new Date(values[field])}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </TableCell>
            );
          case "VALUE_3":
            return (
              <TableCell key="edit_5">
                <TextField
                  id="standard-number"
                  type="number"
                  defaultValue={values[field]}
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: 14 },
                  }}
                  name={field}
                  onChange={handleChange}
                />
              </TableCell>
            );
          default:
            return <TableCell key={_.uniqueId()}>{row[field]}</TableCell>;
        }
      })}
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
