import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { editingMapping } from "../editingComponents/EditingCells";

const StyledCell = withStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    borderBottom: "none",
    flexGrow: 1,
  },
}))(TableCell);

const FiltersCell = (props: any) => {
  const { filters } = props;
  const activeFilters = Object.keys(
    filters as {
      DESCRIPTION: string;
      SOURCE_NM: string;
      CLIENT_NM: string | null;
      TERMINATION_DT: string | null;
      VALUE_3: string | null;
    }
  ).filter((filter) => filters[filter]);
  return (
    <StyledCell>
      <Typography variant="subtitle1">Active filters:</Typography>
      {activeFilters.map((filter) => (
        <Chip
          label={`${editingMapping[filter].label} ${filters[filter]}`}
          variant="outlined"
          key={`chip-${editingMapping[filter].label}`}
          color="primary"
        />
      ))}
    </StyledCell>
  );
};

export default FiltersCell;
