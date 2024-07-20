import {
  CardActions,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { navigate } from "@reach/router";
import * as React from "react";
import { useSelector } from "react-redux";
import CreditCard from "../creditcard";
import { CustomButton } from "../styles";

export default function ManageCards() {
  const savingsinfo = useSelector((state) => state.savingsInfos);
  const checkingsinfo = useSelector((state) => state.checkingsInfos);
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {[
        {
          title: "Savings account",
          balance: "$50,000",
          type: "savings",
          data: savingsinfo,
        },
        {
          title: "Overdraft",
          balance: "$50,000",
          type: "overdraft",
          data: checkingsinfo,
        },
      ].map((accnt, index) => (
        <Grid item xs={12} md={6} key={index}>
          <CardHeader title={accnt.title} subheader={accnt.balance} />

          <div
          // style={{ display: "flex", justifyContent: "center", padding: 3 }}
          >
            <CreditCard type={accnt.type} data={accnt.data} />
          </div>

          <CardActions>
            <CustomButton
              onClick={() => {
                navigate(`/transfer/${accnt.type}`);
              }}
            >
              {`transfer`}
            </CustomButton>
          </CardActions>
        </Grid>
      ))}
      <Grid item xs={12} md={12} key={index}>
        <List>
          <ListSubheader>All Card Detail</ListSubheader>
          {[
            { title: "Card Number", value: savingsinfo.cardnumber },
            { title: "Expire Date", value: savingsinfo.expiredate },
            { title: "CVV", value: savingsinfo.cvv },
          ].map((data, index) => (
            <ListItem key={index}>
              <ListItemText primary={data.title} />
              <ListItemSecondaryAction>{data.value}</ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
