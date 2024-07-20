import React from "react";

import { Card, CardActionArea, CardHeader, Grid } from "@mui/material";
import {
  getAllCardOrder,
  getAllUserLoans,
  getallTransactions,
  getallusers,
} from "../../config/services";
import { formatLocaleCurrency } from "country-currency-map";
import { navigate } from "@reach/router";

function AdminInfo() {
  const [allusers, setAllUsers] = React.useState(0);
  const [info, setInfo] = React.useState({
    transactiondata: [],
    allTransfer: 0,
    pendingTransfer: 0,
    totalCredited: 0,
    totalDebited: 0,
    totalLoans: 0,
  });

  const [loaninfo, setLoanInfo] = React.useState({
    totalLoans: 0,
    pendingloans: 0,
  });

  const [cardinfo, setCardInfo] = React.useState(0);

  React.useEffect(() => {
    getallusers().subscribe((users) => {
      const totaluser = users.length;
      console.log(users);
      setAllUsers(totaluser);
    });

    getallTransactions().subscribe((trx) => {
      const totaltransfer = trx.length;

      //credit
      const totalcreditfilter = trx.filter((el) => {
        return el.transaction_type === "Credit";
      });
      const totalcredit = totalcreditfilter.reduce((prv, cur) => {
        return prv + parseInt(cur.amount);
      }, 0);

      //debit
      const totaldebitfilter = trx.filter((el) => {
        return el.pending === false && el.transaction_type === "Debit";
      });
      const totalDebit = totaldebitfilter.reduce((prv, cur) => {
        return prv + parseInt(cur.amount);
      }, 0);

      const pending = trx.filter((el) => {
        return el.pending === true;
      });

      console.log(trx);
      setInfo({
        ...info,
        transactiondata: trx,
        allTransfer: totaltransfer,
        pendingTransfer: pending.length,
        totalCredited: totalcredit,
        totalDebited: totalDebit,
      });
    });

    getAllUserLoans().subscribe((loans) => {
      //pending loans
      const pending = loans.filter((el) => {
        return el.pending === true;
      });

      setLoanInfo({
        ...loaninfo,
        totalLoans: loans.length,
        pendingloans: pending.length,
      });
    });

    getAllCardOrder().subscribe((orders) => {
      setCardInfo(orders.length);
    });
  }, []);

  return (
    <>
      <Grid container spacing={4}>
        {[
          {
            title: "Total user",
            value: allusers,
            bg: "rgb(63 81 181 / 20%)",
            route: "manager/users",
          },
          {
            title: "All transfer",
            value: info.allTransfer,
            bg: "rgb(76 175 80 / 20%)",
            route: "manager/transactions",
          },
          {
            title: "Pending transfer",
            value: info.pendingTransfer,
            bg: "rgb(255 152 0 / 20%)",
            route: "manager/transactions",
          },
          {
            title: "Master Card orders",
            value: cardinfo,
            bg: "rgb(200 100 90 / 20%)",
            route: "manager/cards",
          },
          {
            title: "All Loans",
            value: loaninfo.totalLoans,
            bg: "rgb(156 39 176 / 20%)",
            route: "manager/loans",
          },
          {
            title: "Pending Loans",
            value: loaninfo.pendingloans,
            bg: "rgb(233 30 99 / 20%)",
            route: "manager/loans",
          },
          {
            title: "total credited amount",
            value: formatLocaleCurrency(info.totalCredited, "USD"),
            bg: "rgb(205 220 57 / 20%)",
          },
          {
            title: "total debited amount",
            value: formatLocaleCurrency(info.totalDebited, "USD"), //info.totalDebited,
            bg: "rgb(255 87 34 / 20%)",
          },
        ].map((data, index) => (
          <Grid key={index} item xs={12} sm={4}>
            <Card variant="outlined" sx={{ backgroundColor: data.bg }}>
              <CardActionArea
                onClick={() =>
                  navigate(data.route, {
                    state: {},
                  })
                }
              >
                <CardHeader
                  title={data.title}
                  subheader={data.value}
                  titleTypographyProps={{ variant: "h6" }}
                  subheaderTypographyProps={{ variant: "h4" }}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AdminInfo;
