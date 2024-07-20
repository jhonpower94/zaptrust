import { Chip, TablePagination, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { CurrencyFormat } from "../currencyformatter";

export default function TransactioMain({ data, type }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setRows(data);
  }, [data]);

  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Reference No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Chip
                    label={row.transaction_type}
                    color={
                      row.transaction_type === "Credit" ? "success" : "warning"
                    }
                  />
                </TableCell>
                <TableCell>
                  <CurrencyFormat amount={row.amount} />
                  <Typography
                    variant="subtitle2"
                    color={row.pending ? "orange" : "green"}
                  >
                    {row.pending ? "Pending" : "Successful"}
                  </Typography>
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell sx={{ textTransform: "uppercase" }}>
                  {row.transaction_type === "Credit"
                    ? `FROM: ${row.sendername} `
                    : "Payment/Transfer "}
                  <br />REF: {row.uid}
                </TableCell>
                <TableCell>{row.uid}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
