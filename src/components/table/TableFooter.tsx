import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import Button from "@material-ui/core/Button";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import { TypographySelected } from "../miscellaneous/typography";
import { StyledFilterButton, StyledFooterCell } from "../styled";
import FilterModal from "../miscellaneous/Modal";
import FiltersCell from "../miscellaneous/FiltersCell";

const filterRow = {
  DESCRIPTION: null,
  SOURCE_NM: null,
  CLIENT_NM: null,
  TERMINATION_DT: null,
  VALUE_3: null,
};

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
  const [filters, setFilters] = React.useState<any>(filterRow);

  const handleModalOpen = () => {
    openFilterModal(true);
  };

  const handleModalClose = () => {
    openFilterModal(false);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    pageNum: number
  ) => {
    setPage(pageNum);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRows = e.target.value;
    setRowsPerPage(parseInt(newRows, 10));
    setPage(0);
  };

  const handleFiltering = () => {
    const criteria = Object.keys(filters).filter((key) => filters[key]);
    const newData = rows.filter((row: any) =>
      criteria.every((item) =>
        item === "DESCRIPTION"
          ? row[item].toLowerCase().includes(filters[item].toLowerCase())
          : filters[item] === row[item]
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
          filters={filters}
          setFilters={setFilters}
          onClose={handleModalClose}
          filterData={handleFiltering}
        />
        <TableRow style={{ display: "flex", alignItems: "center" }}>
          {selected.length > 0 && <TypographySelected selected={selected} />}
          {activeFilter && <FiltersCell filters={filters} />}
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
                    .then(() => setFilters(filterRow))
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
