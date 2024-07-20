import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";
import { navigate } from "@reach/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, signInWithEmailAndPassword } from "../../config/firebaseinit";
import { loading$ } from "../../redux/action";
import Logo from "../logo";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  margintop: {
    marginTop: theme.spacing(4),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ pathtonavigate }) {
  const loading = useSelector((state) => state.loading);
  const classes = useStyles();

  const [open, setOpen] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
  });

  const dispatch = useDispatch();
  const [remenberme, setRemenberme] = useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  useEffect(() => {
    console.log(pathtonavigate);
  });

  const switchnavigation = (path) => {
    switch (path) {
      case "manager":
        return "../manager";
      default:
        return "dashboard/account";
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen({ ...open, open: false });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const changepersistance = (bol) => {
    setRemenberme(bol);
    console.log(bol);
  };
  const submitLogin = (event) => {
    event.preventDefault();
    dispatch(loading$());
    /*  const persistance = remenberme
      ? firebase.auth.Auth.Persistence.LOCAL
      : firebase.auth.Auth.Persistence.NONE;
      */

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        dispatch(loading$());
        navigate(switchnavigation(pathtonavigate));
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        setOpen({
          ...open,
          open: true,
          message: "Sorry incorrect login credentials",
        });
        dispatch(loading$());
      });
  };
  return (
    <>
      <div className={classes.paper}>
        <Logo />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={submitLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            onChange={handleChange("email")}
            autoComplete="email"
            autoFocus
          />
          <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() => changepersistance(!remenberme)}
              />
            }
            label="Remember me"
          />
          <LoadingButton
            type="submit"
            fullWidth
            loading={loading.loading}
            variant="contained"
            color="primary"
            disableElevation
          >
            {"Sign in"}
          </LoadingButton>
        </form>
        <Grid container spacing={3}>
          <Grid mt={4} item>
            <Link
              component="button"
              onClick={() => navigate("resetpassword")}
              color="textPrimary"
            >
              {`Forgot password`}
            </Link>
          </Grid>
          <Grid mt={4} item>
            <Link
              component="button"
              onClick={() => navigate("signup")}
              color="textPrimary"
            >
              {`Don't have an account`}
            </Link>
          </Grid>
        </Grid>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: open.vertical, horizontal: open.horizontal }}
        open={open.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          {open.message}
        </Alert>
      </Snackbar>
    </>
  );
}
