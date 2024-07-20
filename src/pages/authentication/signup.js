import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LoadingButton from "@mui/lab/LoadingButton";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Typography,
  Input,
  TextField,
} from "@mui/material";
import { navigate } from "@reach/router";
import { Timestamp } from "firebase/firestore";
import PropTypes from "prop-types";
import React from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { countrylist } from "../../config/countrylist";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../../config/firebaseinit";
import { addUsers, generateAccounts } from "../../config/services";
import { loading$ } from "../../redux/action";
import Logo from "../logo";
import { RedditTextField, useStyles } from "../styles";
import GetOtp from "./getotp";
import { UploadId, UploadPhoto } from "./uploadid";

const maritalStatus = ["Single", "Married", "Divorced", "Widowed", "Other"];
const gender = ["Male", "Female", "Other"];
const accountype = ["Savings", "Cheking"];

//const loggedIn$ = authState(auth).pipe(filter((user) => !!user));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      format={`+##########`}
      allowEmptyFormatting
      mask="_"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const [otp, setOtp] = React.useState(null);

  const [values, setValues] = React.useState({
    numberformat: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false,
    country: "United States", // set up with reactlocalstorage
    countrycode: "US",
    mobilecode: "+1",
    marital: "Single",
    accountype: "Savings",
    gender: "Male",
    birthdate: new Date("2014-08-18T21:11:54"),
    imageid: "",
    image: "",
    otp: "",
    helpertext: { text: "", error: false },
    transactionpin: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value);
  };

  const handleChangeDate = (newValue) => {
    setValues({
      ...values,
      birthdate: newValue,
    });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const chageCountryCode = (countrycode, dialcode) => {
    setValues({
      ...values,
      countrycode: countrycode,
      mobilecode: dialcode,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const datas = {
      admin: false,
      numberformat: values.numberformat,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      wallet_balance: 0,
      country: values.country,
      mobilecode: values.mobilecode,
      referrer: false,
      countrycode: values.countrycode,
      paymentallowed: 2,
      marital: values.marital,
      gender: values.gender,
      birthdate: values.birthdate,
      imageid: values.imageid,
      image: values.image,
      activated: false,
      Verificationstatus: false,
      btc_balance: 0,
      bnb_balance: 0,
      tron_balance: 0,
      eth_balance: 0,
      usdt_balance: 0,
      usdterc20_balance: 0,
      timestamp: Timestamp.now(),
      transactionpin: values.transactionpin,
    };

    if (values.otp != otp) {
      setValues({
        ...values,
        helpertext: { error: true, text: "Invalid OTP" },
      });
    } else {
      dispatch(loading$());
      createUserWithEmailAndPassword(auth, datas.email, datas.password)
        .then((user) => {
          console.log("user created");
          const userid = user.user.uid;
          addUsers(userid, datas)
            .then(() => {
              generateAccounts(userid);
            })
            .then(() => {
              dispatch(loading$());
              navigate("dashboard/account");
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          dispatch(loading$());
        });
    }
  };

  return (
    <div className={classes.paper}>
      <Logo />
      <Typography component="h1" variant="h5" gutterBottom>
        Sign up
      </Typography>
      <Typography>
        Already have an account? &nbsp;
        <Link
          component="button"
          variant="body2"
          onClick={() => navigate("/")}
          color="primary"
        >
          {`Sign in`}
        </Link>
      </Typography>

      <form className={classes.form} onSubmit={submitForm}>
        <input type="hidden" name="hidenimage" required />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <RedditTextField
              autoComplete="fname"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First name"
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RedditTextField
              required
              fullWidth
              id="lastName"
              label="Last name"
              name="lastName"
              autoComplete="lname"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <RedditTextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={handleChange}
            />
          </Grid>
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
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                onChange={handleChange}
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
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
                required
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <RedditTextField
              fullWidth
              select
              required
              label="Country"
              name="country"
              value={values.country}
              id="standard-select-currency"
              onChange={(e) => {
                var result = countrylist.filter(function(o) {
                  return o.name == e.target.value;
                });
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                  countrycode: result[0].code,
                  mobilecode: result[0].dial_code,
                });
              }}
            >
              {countrylist.map((ct, index) => (
                <MenuItem key={index} value={ct.name}>
                  {ct.name}
                </MenuItem>
              ))}
            </RedditTextField>
          </Grid>
          <Grid item xs={12}>
            <NumberFormat
              format={`${values.mobilecode} ### ### ####`}
              variant="outlined"
              fullWidth
              label="Mobile"
              name="mobile"
              allowEmptyFormatting
              onChange={handleChange}
              customInput={RedditTextField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <RedditTextField
              fullWidth
              select
              required
              label="Marital status"
              name="marital"
              value={values.marital}
              onChange={handleChange}
            >
              {maritalStatus.map((ms, index) => (
                <MenuItem
                  key={index}
                  value={ms}
                  // onClick={() => chageCountryCode(ms, ms)}
                >
                  {ms}
                </MenuItem>
              ))}
            </RedditTextField>
          </Grid>
          <Grid item xs={12}>
            <RedditTextField
              fullWidth
              select
              required
              label="Gender"
              name="gender"
              value={values.gender}
              onChange={handleChange}
            >
              {gender.map((ms, index) => (
                <MenuItem
                  key={index}
                  value={ms}
                  //  onClick={() => chageCountryCode(ms, ms)}
                >
                  {ms}
                </MenuItem>
              ))}
            </RedditTextField>
          </Grid>
          <Grid item xs={12}>
            <RedditTextField
              fullWidth
              select
              required
              label="Select account type"
              name="accountype"
              value={values.accountype}
              onChange={handleChange}
            >
              {accountype.map((at, index) => (
                <MenuItem key={index} value={at}>
                  {at}
                </MenuItem>
              ))}
            </RedditTextField>
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="Date of birth"
                inputFormat="MM/dd/yyyy"
                value={values.birthdate}
                onChange={handleChangeDate}
                renderInput={(params) => (
                  <RedditTextField fullWidth {...params} />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <NumberFormat
              label="Set Transaction Pin"
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
          <Grid item xs={12}>
            <UploadPhoto values={values} setValues={setValues} />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox value="allowExtraEmails" color="primary" required />
              }
              label="I agree to terms, privacy and policy"
            />
          </Grid>
        </Grid>
        <LoadingButton
          type="submit"
          fullWidth
          loading={loading.loading}
          variant="contained"
          color="primary"
          disableElevation
          disabled={values.image.length > 0 ? false : true}
        >
          {"Sign up"}
        </LoadingButton>
      </form>
      <Box mb={4} />
    </div>
  );
}
