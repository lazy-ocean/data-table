import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import { TypographySelected } from "../miscellaneous/typography";
import { StyledFilterButton, StyledFooterCell } from "../styled";
import FilterModal from "../miscellaneous/Modal";

const TableFooterC = (props: any) => {
  const {
    rows,
    rowsPerPage,
    selected,
    edited,
    activeFilter,
    getRows,
    setRowsData,
    toggleFilter,
    page,
    clients,
    setPage,
    setRowsPerPage,
  } = props;

  const [filterModal, openFilterModal] = React.useState<boolean>(false);

  const handleModalOpen = () => {
    openFilterModal(true);
  };

  const handleModalClose = () => {
    openFilterModal(false);
    toggleFilter(false);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
    pageNum: number
  ) => {
    setPage(pageNum);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRows = e.target.value;
    setRowsPerPage(parseInt(newRows, 10));
    setPage(0);
  };

  const handleFiltering = (filterData: any) => {
    const criteria = Object.keys(filterData).filter((key) => filterData[key]);
    const newData = rows.filter((row: any) =>
      criteria.every((item) =>
        item === "DESCRIPTION"
          ? row[item].toLowerCase().includes(filterData[item].toLowerCase())
          : filterData[item] === row[item]
      )
    );
    setRowsData(newData);
    openFilterModal(false);
    toggleFilter(true);
  };

  return (
    <Table>
      <TableFooter>
        <FilterModal
          clients={clients}
          open={filterModal}
          onClose={handleModalClose}
          filterData={(data: any) => handleFiltering(data)}
        />
        <TableRow style={{ display: "flex" }}>
          <TypographySelected selected={selected} />
          <StyledFooterCell>
            <StyledFilterButton
              variant="contained"
              color="primary"
              onClick={handleModalOpen}
              disabled={edited !== false}
            >
              Filter
            </StyledFilterButton>
            {activeFilter && (
              <Button
                variant="outlined"
                color="primary"
                disabled={edited !== false}
                onClick={() =>
                  Promise.resolve(getRows())
                    .then((v) => setRowsData(v))
                    .then(() => toggleFilter(false))
                }
              >
                Clear filters
              </Button>
            )}
          </StyledFooterCell>
          <TablePagination
            count={rows.length}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            onChangePage={handleChangePage}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableFooterC;
