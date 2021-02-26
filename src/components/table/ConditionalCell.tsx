import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { StyledRedCell, StyledYellowCell } from "../styled";
import { conditionalCellsUtils } from "../utils";

const ConditionalCell = (props: any) => {
  const { value, id, field } = props;
  const { warning, danger } = conditionalCellsUtils[field];
  return value > danger ? (
    <StyledRedCell key={`${field}-${id}`} align="right">
      {value}
    </StyledRedCell>
  ) : value > warning ? (
    <StyledYellowCell key={`${field}-${id}`} align="right">
      {value}
    </StyledYellowCell>
  ) : (
    <TableCell key={`${field}-${id}`} align="right">
      {value}
    </TableCell>
  );
};

export default ConditionalCell;
