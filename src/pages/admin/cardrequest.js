import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { getAllCardOrder } from "../../config/services";
import CustomizedSnackbars from "../components/snackbar";
import { ConfirmCardOrder } from "./compoinents";

export default function AllCardsOrder() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [cardOrders, setcardOrders] = React.useState([]);
  React.useEffect(() => {
    getAllCardOrder().subscribe((orders) => {
      setcardOrders(orders);
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
        message={"Order Confirmed"}
      />
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">User</TableCell>

              <TableCell align="left">Confirm</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cardOrders.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  <Typography> {row.fullname}</Typography>
                  <Typography>{row.email}</Typography>
                </TableCell>

                <TableCell align="left">
                  <ConfirmCardOrder
                    row={row}
                    setOpenSnackbar={setOpenSnackbar}
                  />
                </TableCell>
                <TableCell align="left">
                  <Typography color={!row.active ? "orange" : "green"}>
                    {!row.active ? "Pending" : "Comfirmed"}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
