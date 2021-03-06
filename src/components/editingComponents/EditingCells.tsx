import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";
import { theme, useStyles } from "../styled";
import { editingMapping } from "../utils";

const EditedCell = (props: any) => {
  const {
    field,
    displayType,
    values,
    handleChange,
    clients,
    setValues,
    handleDateChange,
    row,
    view,
  } = props;
  const txtClasses = useStyles();
  const { inputType, placeholder, label, dataType, source = null } =
    editingMapping[field] || editingMapping.defaultValue;

  let input;
  switch (inputType) {
    case "TEXT":
      input = (
        <TextField
          type={dataType}
          defaultValue={values[field]}
          name={field}
          size="small"
          id="input-descr"
          style={{ width: "100%" }}
          onChange={handleChange}
          placeholder={view === "form" ? placeholder : ""}
        />
      );
      break;
    case "LIST":
      input = (
        <TextField
          id="select-source"
          select
          defaultValue={values[field]}
          name={field}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {(view === "form" ? ["All", ...source] : source).map(
            (item: string) => (
              <option key={item} value={item}>
                {item}
              </option>
            )
          )}
        </TextField>
      );
      break;
    case "AUTOCOMPLETE":
      input = (
        <Autocomplete
          id="picker"
          size="small"
          options={clients}
          onChange={(e, newValue) =>
            setValues({ ...values, [field]: newValue })
          }
          defaultValue={values[field]}
          getOptionLabel={(option: string) => option || ""}
          renderInput={(params) => (
            <TextField
              /* eslint-disable react/jsx-props-no-spreading */
              {...params}
              variant="outlined"
              placeholder={view === "form" ? placeholder : ""}
            />
          )}
        />
      );
      break;
    case "DATE":
      input = (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={theme}>
            <DatePicker
              variant="inline"
              openTo="year"
              name={field}
              views={["year", "month"]}
              value={view === "form" ? values[field] : new Date(values[field])}
              onChange={handleDateChange}
            />
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      );
      break;
    default:
      input = row[field].toString();
      break;
  }
  return (
    <TableCell align={displayType === "NUMERIC" ? "right" : "left"}>
      {view === "form" && (
        <Typography
          variant="subtitle1"
          gutterBottom
          className={txtClasses.subtitle1}
        >
          {label}
        </Typography>
      )}
      {input}
    </TableCell>
  );
};

export default EditedCell;
