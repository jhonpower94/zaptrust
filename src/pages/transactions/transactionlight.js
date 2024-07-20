import { Chip, Tab, TablePagination, Tabs, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useSelector } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { CurrencyFormat } from "../currencyformatter";
import { TransDetailDailog } from "./detailmodal";

const styles = {
  tabs: {
    background: "#fff",
  },
  slide: {
    padding: 15,
    minHeight: 100,
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};

function TransactionTable({ data }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [datax, setData] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setRows(data);
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                hover
                onClick={(event) => {
                  setSelected(index);
                  setData(row);
                  handleClickOpen();
                }}
                role="checkbox"
                selected={selected === index}
                sx={{
                  cursor: "pointer",
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <Chip
                    label={row.transaction_type}
                    color={
                      row.transaction_type === "Credit" ? "success" : "warning"
                    }
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">
                    <CurrencyFormat amount={row.amount} />
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={row.pending ? "orange" : "green"}
                  >
                    {row.pending ? "Pending" : "Successful"}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <TransDetailDailog open={open} handleClose={handleClose} data={datax} />
    </div>
  );
}

export default function TransactioLight() {
  const transactions = useSelector((state) => state.totalTransactionsType);
  const [state, setState] = React.useState({ index: 0 });

  const handleChange = (event, value) => {
    console.log(value);
    setState({
      index: value,
    });
  };

  const handleChangeIndex = (index) => {
    setState({
      index: index,
    });
  };

  const { index } = state;

  const accountarrays = [
    {
      accountype: "savings",
      data: [...transactions.savings],
    },
    {
      accountype: "overdraft",
      data: [...transactions.checkings],
    },
  ];

  return (
    <div>
      <Tabs
        variant="fullWidth"
        value={state.index}
        onChange={handleChange}
        style={styles.tabs}
      >
        {accountarrays.map((account, index) => (
          <Tab label={account.accountype} key={index} />
        ))}
      </Tabs>
      <SwipeableViews
        index={index}
        onChangeIndex={(index) => handleChangeIndex(index)}
      >
        {accountarrays.map((account, index) => (
          <div style={Object.assign({}, styles.slide)} key={index}>
            <TransactionTable data={account.data} />
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
}
