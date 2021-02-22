import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";
import _ from "lodash";
import { theme, useStyles } from "../styled";

const sourceMap = ["DEV", "UAT", "PROD"];
const EditingCells = (props: any) => {
  const {
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
              getOptionLabel={(option: string) => option || ""}
              style={{ width: "100%", fontSize: 14 }}
              renderInput={(params) => (
                <TextField
                  /* eslint-disable react/jsx-props-no-spreading */
                  {...params}
                  variant="outlined"
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
                  value={
                    type === "form" ? values[field] : new Date(values[field])
                  }
                  onChange={handleDateChange}
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
              placeholder={type === "form" ? "0 - 10000000000" : ""}
            />
          </TableCell>
        );
      default:
        return <TableCell key={_.uniqueId()}>{row[field]}</TableCell>;
    }
  });
};

export default EditingCells;
