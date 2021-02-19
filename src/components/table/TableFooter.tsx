import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import { TypographySelected } from "../miscellaneous/typography";
import { StyledFilterButton } from "../styled";
import FilterModal from "../miscellaneous/Modal";

export const TableFooterC = (props: any) => {
  let {
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
    page: number
  ) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRows = e.target.value;
    setRowsPerPage(parseInt(newRows));
    setPage(0);
  };

  const handleFiltering = (filterData: any) => {
    let criteria = Object.keys(filterData).filter((key) => filterData[key]);
    let newData = rows.filter((row: any) => {
      return criteria.every((item) =>
        item === "DESCRIPTION"
          ? row[item].toLowerCase().includes(filterData[item].toLowerCase())
          : filterData[item] === row[item]
      );
    });
    setRowsData(newData);
    openFilterModal(false);
    toggleFilter(true);
  };

  return (
    <Table>
      <TableFooter style={{ display: "block" }}>
        <FilterModal
          clients={clients}
          open={filterModal}
          onClose={handleModalClose}
          filterData={(data: any) => handleFiltering(data)}
        />
        <TableRow style={{ display: "flex" }}>
          <TypographySelected selected={selected} />
          <TableCell style={{ borderBottom: "none", padding: 8 }}>
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
          </TableCell>
          <TablePagination
            count={rows.length}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            style={{ borderBottom: "none" }}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
};
