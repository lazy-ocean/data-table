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
  let [source, setSource] = useState<string>(row["SOURCE_NM"]);
  let [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setDate(date);
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
              <TableCell key={_.uniqueId()}>
                <TextField
                  defaultValue={row[field]}
                  size="small"
                  id="input-descr"
                  style={{ fontSize: "11px" }}
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                />
              </TableCell>
            );
          case "SOURCE_NM":
            return (
              <TableCell key={_.uniqueId()}>
                <TextField
                  id="select-source"
                  select
                  defaultValue={row[field]}
                  //onChange={() => setSource()}
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
              <TableCell key={_.uniqueId()}>
                <Autocomplete
                  id="client-picker"
                  size="small"
                  options={clients}
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
              <TableCell key={_.uniqueId()}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    variant="inline"
                    openTo="year"
                    views={["year", "month"]}
                    value={date}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </TableCell>
            );
          case "VALUE_3":
            return (
              <TableCell key={_.uniqueId()}>
                <TextField
                  id="standard-number"
                  type="number"
                  defaultValue={row[field]}
                  InputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: 14 },
                  }}
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
          onClick={() => saveData(row.id)}
        >
          Save
        </StyledEditButton>
      </TableCell>
    </TableRow>
  );
};
