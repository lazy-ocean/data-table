import { Source } from "./data";

// ADD COLUMN NAME AND TWO CRITERIA FOR CELLS TO BE PAINTED IN RED (DANGER) AND YELLOW (WARNING)
export const conditionalCellsUtils: any = {
  VALUE_1: {
    danger: 3000,
    warning: 2000,
  },
};

// ADD COLUMN NAMES TO ADD FILTER FOR IT
export const filtersFieldsUtils = [
  "DESCRIPTION",
  "SOURCE_NM",
  "CLIENT_NM",
  "TERMINATION_DT",
  "VALUE_3",
];

// ADD COLUMN NAME AND DATA FOR INPUT TO BE USED IN EDITING AND FILTERING
export const editingMapping: any = {
  DESCRIPTION: {
    placeholder: "Lorem ipsum",
    inputType: "TEXT",
    label: "Item description:",
    dataType: "text",
  },
  SOURCE_NM: {
    inputType: "LIST",
    label: "Source:",
    source: Object.values(Source),
  },
  CLIENT_NM: {
    inputType: "AUTOCOMPLETE",
    label: "Client name:",
    placeholder: "KOG",
  },
  TERMINATION_DT: {
    inputType: "DATE",
    label: "Termination date:",
  },
  VALUE_3: {
    placeholder: "0 - 100000000",
    inputType: "TEXT",
    label: "Max range:",
    dataType: "number",
  },
  defaultValue: {
    placeholder: null,
    inputType: null,
    label: null,
    dataType: null,
  },
};
