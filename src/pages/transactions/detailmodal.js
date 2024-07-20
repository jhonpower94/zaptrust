import {
    Box,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
    Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { BootstrapButton } from "../components/styledcomponents";
import { CurrencyFormat } from "../currencyformatter";
import "./style.scoped.css";

export function TransDetailDailog({ open, handleClose, data }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { amount, date, transaction_type, uid } = data;

  React.useEffect(() => {
    console.log(data);
  });

  const isCredit = transaction_type === "Credit";

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="modal-content modal-content-demo" bis_skin_checked={1}>
          <div className="modal-header" bis_skin_checked={1}>
            <h6 className="modal-title">Transaction details</h6>
            <button
              aria-label="Close"
              className="close"
              onClick={handleClose}
              type="button"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body" bis_skin_checked={1}>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
              {isCredit ? "Recieved" : "Sent"}{" "}
              {<CurrencyFormat amount={amount} prefix={"$"} seperator={true} />}
            </Typography>

            <Box mt={1} />

            <List
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader sx={{ fontSize: 18 }} id="nested-list-subheader">
                  Details
                </ListSubheader>
              }
            >
              {[
                {
                  primary: "Date",

                  secondaryaction: date,
                },

                {
                  primary: "Amount",

                  secondaryaction: (
                    <Typography variant="h5" color={isCredit ? "green" : "red"}>
                      {isCredit ? "+" : "-"}
                      <CurrencyFormat amount={amount} />
                    </Typography>
                  ),
                },
                {
                  primary: "Description",
                  secondaryaction: (
                    <Typography variant="h5">
                      {isCredit
                        ? `From: ${data.sendername}`
                        : `Payment/Transfer`}
                    </Typography>
                  ),
                },
                {
                  primary: "Reference",
                  secondaryaction: (
                    <Box
                      sx={{
                        width: 160,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Typography variant="h5">{uid}</Typography>
                    </Box>
                  ),
                },
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.primary}
                    primaryTypographyProps={{ variant: "h6" }}
                  />
                  <ListItemSecondaryAction>
                    {item.secondaryaction}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
          <div className="modal-footer" bis_skin_checked={1}>
            {/* <button className="btn ripple btn-primary" type="button">Save changes</button> */}
            <BootstrapButton
              variant="contained"
              onClick={handleClose}
              disableElevation
            >
              Close
            </BootstrapButton>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
