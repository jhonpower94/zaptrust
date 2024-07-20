import React from "react";
import { sendMessage } from "../../config/services";
import { CustomLoadingButton } from "../components/styledcomponents";
import { Alert, Snackbar } from "@mui/material";

function GetOtp({ values, setOtp }) {
  const [loading, setLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const getOtp = () => {
    setLoading(true);
    const otp = Math.floor(1000 + Math.random() * 9000);
    sendMessage(
      `You one time verification code is <br/> <strong>${otp}</strong>`,
      "Verify-otp",
      values.email,
      `${values.firstName}`
    )
      .then((result) => {
        console.log(result);
        setOtp(`${otp}`);
        setLoading(false);
        setOpenSnackbar(true);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        alert("Something went wrong please try again.");
      });
  };

  return (
    <>
      <CustomLoadingButton
        loading={loading}
        size="large"
        fullWidth
        disableElevation
        onClick={getOtp}
      >
        Get OTP
      </CustomLoadingButton>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={10000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
          variant="standard"
        >
          {`OTP Sent to ${values.email}`}
        </Alert>
      </Snackbar>
    </>
  );
}

export default GetOtp;
