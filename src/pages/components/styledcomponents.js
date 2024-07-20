import { LoadingButton } from "@mui/lab";
import { Button, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  borderRadius: 8,
});

export const BootstrapButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: 16,
  borderRadius: 5,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
}));

export const CustomLoadingButton = styled(LoadingButton)(({ theme }) => ({
  textTransform: "none",
  fontSize: 16,
  border: "1px solid #E0E3E7",
  borderRadius: 5,
  
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
}));
