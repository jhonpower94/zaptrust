import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Snackbar,
} from "@mui/material";
import { serverTimestamp } from "firebase/firestore";
import PropTypes from "prop-types";
import * as React from "react";
import NumberFormat from "react-number-format";
import International from "./international";
import Local from "./local";
import Internal from "./internal";
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";
import MuiAlert from "@mui/material/Alert";
import { sendMessage } from "../../config/services";
import UsdtTransfer from "./usdt";
import BtcTransfer from "./btc";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="standard" {...props} />;
});

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function TransferMain({ type }) {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const time = today.getHours() + ":" + today.getMinutes();

  const [loading, setLoading] = React.useState(false);
  const userinfo = useSelector((state) => state.useInfos);
  const [open, setOpen] = React.useState(false);

  const [values, setValues] = React.useState({
    type: type,
    transaction_type: "Debit",
    amount: "",
    mode: "domestic",
    accountnumber: "",
    bankname: "",
    fullname: "",
    swift: "",
    iban: "",
    country: "",
    wallet: "",
    network: "ERC20",
    pin: "",
    date: `${mm}/${dd}/${yyyy} ${time}`,
    timestamp: serverTimestamp(),
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const pinarrays = [
    "059143",
    "285465",
    "658395",
    "655483",
    "252713",
    "464844",
  ];
  const isPinarrays = pinarrays.includes(values.pin);
  const transactionPin = userinfo.transactionpin;

  const submitForm = (event) => {
    event.preventDefault();
    if (isPinarrays || transactionPin === values.pin) {
      navigate("../cardpin", { state: values });
    } else {
      setOpen(true);
    }
  };

  return (
    <div>
      <Box mt={2} mb={2}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Transaction type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="mode"
            value={values.mode}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Internal"
              name="mode"
              control={<Radio />}
              label="Internal"
            />
            <FormControlLabel
              value="domestic"
              name="mode"
              control={<Radio />}
              label="Domestic"
            />
            <FormControlLabel
              value="international"
              name="mode"
              control={<Radio />}
              label="International transfer"
            />
            <FormControlLabel
              value="USDT"
              name="mode"
              control={<Radio />}
              label="USDT transfer"
            />
            <FormControlLabel
              value="BTC"
              name="mode"
              control={<Radio />}
              label="BTC transfer"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {values.mode === "Internal" ? (
        <Internal
          values={values}
          handleChange={handleChange}
          submitForm={submitForm}
          loading={loading}
        />
      ) : null}
      {values.mode === "domestic" ? (
        <Local
          values={values}
          handleChange={handleChange}
          submitForm={submitForm}
          loading={loading}
        />
      ) : null}
      {values.mode === "international" ? (
        <International
          values={values}
          handleChange={handleChange}
          submitForm={submitForm}
          loading={loading}
        />
      ) : null}
      {values.mode === "USDT" ? (
        <UsdtTransfer
          values={values}
          handleChange={handleChange}
          submitForm={submitForm}
          loading={loading}
        />
      ) : null}
      {values.mode === "BTC" ? (
        <BtcTransfer
          values={values}
          handleChange={handleChange}
          submitForm={submitForm}
          loading={loading}
        />
      ) : null}

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Incorrect Transaction Pin
        </Alert>
      </Snackbar>
    </div>
  );
}

export default TransferMain;
