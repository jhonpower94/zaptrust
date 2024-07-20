import { Box, Container, Grid, MenuItem, Typography } from "@mui/material";
import React from "react";

import { LoadingButton } from "@mui/lab";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import NumberFormat from "react-number-format";
import { db } from "../../config/firebaseinit";
import { RedditTextField } from "../styles";
import RecieveDialog from "./recievemodal";
import { useSelector } from "react-redux";

const current_timestamp = Timestamp.fromDate(new Date());

function OrderCard() {
  const userinfo = useSelector((state) => state.useInfos);
  const savingsinfo = useSelector((state) => state.savingsInfos);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: 2500,
    coin: "USDT",
    pin: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const orderCard = (e) => {
    e.preventDefault();
    setLoading(true);
    const cardRef = doc(db, "cardorder", userinfo.id);
    setDoc(
      cardRef,
      {
        email: userinfo.email,
        fullname: `${userinfo.firstName} ${userinfo.lastName}`,
        userid: userinfo.id,
        active: false,
        amount: parseInt(values.amount),
        coin: values.coin,
        pin: values.pin,
        date: current_timestamp,
      },
      { merge: true }
    ).then(() => {
      setLoading(false);
      setOpen(true);
    });
  };

  return (
    <Container maxWidth="xs">
      <Box p={3}>
        <Typography variant="h6">Order a virtual Master card **</Typography>
      </Box>
      <form onSubmit={orderCard}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <RedditTextField
              fullWidth
              select
              required
              label="Select payment"
              name="coin"
              value={values.coin}
              onChange={handleChange}
            >
              {["USDT", "BITCOIN"].map((coin, index) => (
                <MenuItem key={index} value={coin}>
                  {coin}
                </MenuItem>
              ))}
            </RedditTextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumberFormat
              fullWidth
              prefix="$"
              name="amount"
              thousandSeparator=","
              defaultValue={values.amount}
              label="Amount"
              customInput={RedditTextField}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumberFormat
              label="Set Card Pin"
              onValueChange={(value) => {
                setValues({ ...values, pin: value.value });
                console.log(value.value);
              }}
              name="pin"
              required
              fullWidth
              helperText="Set your 4 digit card pin"
              minLength={4}
              maxLength={4}
              value={values.pin}
              customInput={RedditTextField}
              format="####"
              mask="*"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <LoadingButton
              type="submit"
              fullWidth
              loading={loading}
              variant="contained"
              color="primary"
              disableElevation
              disabled={savingsinfo.cardactive}
            >
              {"Order Now"}
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
      <RecieveDialog open={open} handleClose={handleClose} values={values} />
    </Container>
  );
}

export default OrderCard;
