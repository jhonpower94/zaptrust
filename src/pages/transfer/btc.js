import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import NumberFormat from "react-number-format";

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

export default function BtcTransfer({
  values,
  handleChange,
  submitForm,
  loading,
}) {
  return (
    <form onSubmit={submitForm}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Amount"
            value={values.amount}
            onChange={handleChange}
            name="amount"
            id="formatted-numberformat-input"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            constiant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="outlined-basic"
            label="BTC Address"
            name="wallet"
            constiant="outlined"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select network
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="network"
              value={values.network}
              label={"Select network"}
              onChange={handleChange}
            >
              {["bitcoin"].map((network, index) => (
                <MenuItem key={index} value={network}>
                  {network}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="outlined-basic-pin"
            label="Transaction Pin"
            name="pin"
            constiant="outlined"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            id="outlined-multiline-static"
            label="Transfer description"
            multiline
            rows={2}
            defaultValue=""
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <LoadingButton
            type="submit"
            loading={loading}
            fullWidth
            variant="contained"
            size="large"
            disableElevation
          >
            {`Continue`}
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
}
