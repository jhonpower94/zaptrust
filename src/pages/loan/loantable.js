import { TablePagination, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useSelector } from "react-redux";
import { CurrencyFormat } from "../currencyformatter";

export default function LoanTable({ data }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const loans = useSelector((state) => state.loans);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    console.log(loans);
  });

  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table" sx={{ minWidth: 350 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loans.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  <Typography variant="h6">{row.amount}</Typography>
                </TableCell>

                <TableCell align="left">
                  <Typography
                    variant="h6"
                    color={row.pending ? "orange" : "green"}
                  >
                    {row.pending ? "Pending" : "Confirmed"}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h6">{row.duration} month</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={loans.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

/*
<TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loans.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  <Typography variant="h6">{row.accountnumber}</Typography>
                </TableCell>

                <TableCell align="left">
                  <Typography variant="h6">
                    {row.pending ? "Pending" : "Confirmed"}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={loans.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      */
