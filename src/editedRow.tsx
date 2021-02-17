import React, { useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { StyledEditButton, theme, useStyles } from "./styled";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

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

export const EditingCells = (props: any) => {
  let {
    colsNames,
    values,
    handleChange,
    clients,
    setValues,
    handleDateChange,
    row,
    type,
  } = props;
  const txtClasses = useStyles();

  return colsNames.map((field: string) => {
    switch (field) {
      case "DESCRIPTION":
        return (
          <TableCell key="edit_1">
            {type === "form" && (
              <Typography
                variant="subtitle1"
                gutterBottom
                className={txtClasses.subtitle1}
              >
                Item description:
              </Typography>
            )}

            <TextField
              defaultValue={values[field]}
              name={field}
              size="small"
              id="input-descr"
              style={{ fontSize: "11px", width: "100%" }}
              InputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              onChange={handleChange}
              //label={type === "form" ? "Item description" : false}
              placeholder={type === "form" ? "Lorem ipsums" : ""}
            />
          </TableCell>
        );
      case "SOURCE_NM":
        return (
          <TableCell key="edit_2">
            {type === "form" && (
              <Typography
                variant="subtitle1"
                gutterBottom
                className={txtClasses.subtitle1}
              >
                Source:
              </Typography>
            )}
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
              //label={type === "form" ? "Source" : false}
            >
              {type === "form"
                ? ["All", ...sourceMap].map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))
                : sourceMap.map((source) => (
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
            {type === "form" && (
              <Typography
                variant="subtitle1"
                gutterBottom
                className={txtClasses.subtitle1}
              >
                Client name:
              </Typography>
            )}
            <Autocomplete
              id="client-picker"
              size="small"
              options={clients}
              onChange={(e, newValue) =>
                setValues({ ...values, [field]: newValue })
              }
              defaultValue={values[field]}
              getOptionLabel={(option: string) => option}
              style={{ width: "100%", fontSize: 14 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  //label={type === "form" ? "Client name" : false}
                  placeholder={type === "form" ? "KOG" : ""}
                />
              )}
            />
          </TableCell>
        );
      case "TERMINATION_DT":
        return (
          <TableCell key="edit_4">
            {type === "form" && (
              <Typography
                variant="subtitle1"
                gutterBottom
                className={txtClasses.subtitle1}
              >
                Termination date:
              </Typography>
            )}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <ThemeProvider theme={theme}>
                <DatePicker
                  variant="inline"
                  openTo="year"
                  name={field}
                  views={["year", "month"]}
                  value={new Date(values[field])}
                  onChange={handleDateChange}
                  //label={type === "form" ? "Termination date" : false}
                />
              </ThemeProvider>
            </MuiPickersUtilsProvider>
          </TableCell>
        );
      case "VALUE_3":
        return (
          <TableCell key="edit_5">
            {type === "form" && (
              <Typography
                variant="subtitle1"
                gutterBottom
                className={txtClasses.subtitle1}
              >
                Max range:
              </Typography>
            )}
            <TextField
              id="standard-number"
              type="number"
              defaultValue={values[field]}
              InputProps={{
                style: { fontSize: 14 },
              }}
              InputLabelProps={{
                style: { fontSize: 14 },
              }}
              name={field}
              onChange={handleChange}
              //label={type === "form" ? "Max range" : false}
              placeholder={type === "form" ? "0 - 10000000000" : ""}
            />
          </TableCell>
        );
      default:
        return <TableCell key={_.uniqueId()}>{row[field]}</TableCell>;
    }
  });
};
