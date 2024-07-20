import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { formatLocaleCurrency } from "country-currency-map";
import * as React from "react";
import {
  getallTransactions
} from "../../config/services";
import CustomizedSnackbars from "../components/snackbar";
import { ConfirmTransaction } from "./compoinents";

export default function AllTransactions() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [transactions, setTransactions] = React.useState([]);
  React.useEffect(() => {
    getallTransactions().subscribe((transactions) => {
      console.log(transactions);
      setTransactions(transactions);
    });
  }, []);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <>
      <CustomizedSnackbars
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        severity="success"
        message={"Transaction Confirmed"}
      />
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">User</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Confirm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  <Typography color={row.pending ? "orange" : "green"}>
                    {row.pending ? "Pending" : "Comfirmed"}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography> {row.fullname}</Typography>
                  <Typography>{row.accountnumber}</Typography>
                </TableCell>
                <TableCell align="left">
                  {formatLocaleCurrency(row.amount, "USD")}
                </TableCell>

                <TableCell align="left">
                  <ConfirmTransaction
                    row={row}
                    setOpenSnackbar={setOpenSnackbar}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
