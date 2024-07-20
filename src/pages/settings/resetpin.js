import { Container, Grid } from "@mui/material";
import React from "react";
import NumberFormat from "react-number-format";
import GetOtp from "../authentication/getotp";
import { RedditTextField } from "../styles";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseinit";
import CustomizedSnackbars from "../components/snackbar";
import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";

function ResetPin() {
  const userinfo = useSelector((state) => state.useInfos);
  const [loading, setLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [otp, setOtp] = React.useState(null);
  const [values, setValues] = React.useState({
    email: userinfo.email,
    firstName: userinfo.firstName,
    otp: "",
    transactionpin: "",
    helpertext: { text: "", error: false },
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (values.otp != otp) {
      setValues({
        ...values,
        helpertext: { error: true, text: "Invalid OTP" },
      });
    } else {
      setLoading(true);
      const userRef = doc(db, "users", userinfo.id);
      setDoc(
        userRef,
        { transactionpin: values.transactionpin },
        { merge: true }
      ).then(() => {
        setOpenSnackbar(true);
        setLoading(false);
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={submit}>
        <Grid container spacing={3}>
          <Grid item xs={7} sm={7}>
            <RedditTextField
              size="small"
              name="otp"
              required
              fullWidth
              id="otp"
              label="OTP"
              onChange={handleChange}
              error={values.helpertext.error}
              helperText={values.helpertext.text}
            />
          </Grid>
          <Grid item xs={5} sm={5}>
            <GetOtp values={values} setOtp={setOtp} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <NumberFormat
              label="Set Transaction Pin"
              fullWidth
              onValueChange={(value) => {
                setValues({ ...values, transactionpin: value.value });
                console.log(value.value);
              }}
              required
              minLength={4}
              maxLength={4}
              value={values.transactionpin}
              customInput={RedditTextField}
              format="####"
              mask="*"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <LoadingButton
            fullWidth
              type="submit"
              loading={loading}
              variant="contained"
              disableElevation
            >
              Reset pin
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
      <CustomizedSnackbars
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        severity="success"
        message={"Transaction pin successfully changed"}
      />
    </Container>
  );
}

export default ResetPin;
