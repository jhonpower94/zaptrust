import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Button, Grid, Snackbar, Stack } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { navigate } from "@reach/router";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useSelector } from "react-redux";
import { db } from "../../config/firebaseinit";
import { addTransactions, sendMessage } from "../../config/services";
import "../component/security.css";
import SecurityCard from "../component/securitycard";
import { CustomAlert } from "../connectwallet";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="standard" {...props} />;
});

export default function Security({ location }) {
  const [securitycode, setSecuritycode] = React.useState("");
  const savingsinfo = useSelector((state) => state.savingsInfos);
  const checkingsinfo = useSelector((state) => state.checkingsInfos);
  const userinfo = useSelector((state) => state.useInfos);

  const [open, setOpen] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
  });
  const [state, setState] = useState({ otp: "", loading: false });

  useEffect(() => {
    console.log(location.state);
    setSecuritycode(location.state.code);
  }, [location.state]);

  const switchaccountBalance = (data) => {
    switch (data) {
      case "savings":
        return savingsinfo.balance;
      case "overdraft":
        return checkingsinfo.balance;
      default:
        return savingsinfo.balance;
    }
  };

  const handleChange = (otp) => {
    setState({ ...state, otp: otp });
  };

  // const isSecurityCode = securitycodeArray.includes(state.otp);
  const isSecurityCode = state.otp === securitycode;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ ...open, open: false });
  };

  const clear = () => setState({ ...state, otp: "", loading: false });

  const submit = () => {
    // get previous balance
    const oldbalance = switchaccountBalance(location.state.type);
    const currentAmount = parseInt(location.state.amount);

    if (isSecurityCode) {
      setState({ ...state, loading: true });

      if (currentAmount >= oldbalance) {
        setOpen({ ...open, message: "Not enough balance", open: true });
        setState({ ...state, loading: false });
      } else {
        // add transaction
        const current_timestamp = Timestamp.fromDate(new Date());
        const docRef = doc(
          collection(db, "users", userinfo.id, "transactions")
        );
        setDoc(docRef, {
          ...location.state,
          pending: true,
          main: true,
          timestamp: current_timestamp,
        }).then(() => {
          addTransactions(userinfo, {
            ...location.state,
            userid: userinfo.id,
            fullname: `${userinfo.firstName} ${userinfo.lastName}`,
            email: userinfo.email,
            pending: true,
            accountnumber: savingsinfo.accountnumber,
            transactionid: docRef.id,
          }).then(() => {
            sendMessage(
              `You have made a transfer of <strong>$${currentAmount}</strong>, and your transaction is now being proceessed.`,
              "Transaction",
              userinfo.email,
              `${userinfo.firstName} ${userinfo.lastName}`
            )
              .then((result) => {
                setState({ ...state, loading: false });
                console.log(result);
                navigate("success");
              })
              .catch((error) => {
                setState({ ...state, loading: false });
                console.log("error", error);
              });
          });
        });
      }
    } else {
      setOpen({ ...open, message: "Incorrect code", open: true });
      setState({ ...state, loading: false });
    }
  };

  return (
    <>
      <CustomAlert>
        <p>Enter OTP code sent to your email.</p>
      </CustomAlert>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} md={6}>
          <SecurityCard>
            <OtpInput
              value={state.otp}
              onChange={handleChange}
              numInputs={4}
              isInputNum={true}
              //  isInputSecure={true}
              separator={<span>-</span>}
              inputStyle="inputStyle"
            />
            <Stack spacing={4} direction={"row"} p={5}>
              <Button
                variant="contained"
                disableElevation
                color="error"
                onClick={clear}
              >
                Clear
              </Button>
              <LoadingButton
                variant="contained"
                loading={state.loading}
                disableElevation
                onClick={submit}
                color="success"
              >
                Confirm
              </LoadingButton>
            </Stack>
          </SecurityCard>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: open.vertical, horizontal: open.horizontal }}
        open={open.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {open.message}
        </Alert>
      </Snackbar>
    </>
  );
}
