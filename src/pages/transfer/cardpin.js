import LoadingButton from "@mui/lab/LoadingButton";
import {
  Alert,
  Box,
  Container,
  Snackbar,
  TextField,
  Link,
  Typography,
} from "@mui/material";
import { navigate } from "@reach/router";
import React from "react";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
import { sendMessage } from "../../config/services";
import CreditCard from "../creditcard";
import { RedditTextField } from "../styles";

function CardPin({ location }) {
  const savingsinfo = useSelector((state) => state.savingsInfos);
  const userinfo = useSelector((state) => state.useInfos);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    cardpin: "",
  });

  const cardPin = savingsinfo.cardpin;

  const submitForm = (event) => {
    event.preventDefault();
    if (cardPin === values.cardpin) {
      setLoading(true);
      const otp = Math.floor(1000 + Math.random() * 9000);
      sendMessage(
        `You have made a transaction, please use this otp code below to confirm transaction
          <br/>
          ${otp} `,
        "Verify-otp",
        userinfo.email,
        `${userinfo.firstName} ${userinfo.lastName}`
      )
        .then((result) => {
          console.log(result);
          setLoading(false);
          navigate("security", {
            state: { ...location.state, code: `${otp}` },
          });
        })
        .catch((error) => {
          console.log("error", error);
          setLoading(false);
          alert("Something went wrong please try again.");
        });
    } else {
      setOpen(true);
    }
  };

  return (
    <Container maxWidth="xs">
      <CreditCard type={"Savings"} data={savingsinfo} />
      <form onSubmit={submitForm}>
        <Box mt={4} mb={2}>
          <NumberFormat
            label="Card Pin"
            onValueChange={(value) => {
              setValues({ ...values, cardpin: value.value });
              console.log(value.value);
            }}
            required
            fullWidth
            helperText="Enter card pin to proceed transfer"
            minLength={4}
            maxLength={4}
            value={values.cardpin}
            customInput={RedditTextField}
            format="####"
            mask="*"
          />
        </Box>

        <LoadingButton
          type="submit"
          fullWidth
          loading={loading}
          variant="contained"
          color="primary"
          disableElevation
        >
          {"Proceed"}
        </LoadingButton>

        <Box mt={2} display="flex">
          <Typography variant="subtitle2">
            Don't have your card pin ?
          </Typography>
          <Link
            sx={{ ml: 1, fontWeight: "bold" }}
            component="button"
            onClick={() => navigate("cards/savngs")}
          >
            Order Card
          </Link>
        </Box>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Incorrect Card Pin
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default CardPin;
