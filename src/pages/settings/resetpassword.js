import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Alert, AlertTitle, Grid, Snackbar, Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";
import { useSelector } from "react-redux";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebaseinit";

const AlertCustom = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SettingsIndex({ action }) {
  const [open, setOpen] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const handleClick = () => {
    setOpen({ ...open, open: true });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ ...open, open: false });
  };

  const [loading, setLoading] = useState(false);
  const userinfo = useSelector((state) => state.useInfos);

  
  const reset = () => {
    setLoading(true);

    sendPasswordResetEmail(auth, userinfo.email)
      .then(() => {
        setOpen({ ...open, open: true });
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <Grid
        container
        spacing={4}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={1}
      >
        <Grid item xs={12} md={6}>
          <Alert severity="info">
            <AlertTitle>{`Reset your account ${action} `}</AlertTitle>
            <Typography>
              {`Hello ${userinfo.firstName} ${userinfo.lastName}, a ${action} reset link has been sent to your email address`}{" "}
              <strong>{userinfo.email}</strong>
            </Typography>
            <Typography gutterBottom>
              {`please click on the link and follow the step in order to reset your ${action}.`}
            </Typography>

            <LoadingButton
              loading={loading}
              variant="contained"
              disableElevation
              onClick={reset}
              color="secondary"
            >
              {`Reset ${action}`}
            </LoadingButton>
          </Alert>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: open.vertical, horizontal: open.horizontal }}
        open={open.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <AlertCustom onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {"Request was successful, please check your email"}
        </AlertCustom>
      </Snackbar>
    </div>
  );
}

export default SettingsIndex;
