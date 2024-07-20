import * as React from "react";
import { Alert, AlertTitle, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { notification$ } from "../redux/action";

export default function AccessPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      notification$({
        title: "⛔ Access denied",
        discription:
          "Sorry you are not allowed to process transactions or make changes currently, please contact our live support to fix issue.",
      })
    );
  }, []);
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} md={6}>
          <Alert variant="filled" severity="warning">
            <AlertTitle>Sorry! transfer failed!</AlertTitle>
            Your account is temporary blocked from processing transactions. Click on
            the livechat button or the link below &#128071; to contact customer
            service in order to verify or fix your account.
            <a href="https://jivo.chat/MKDgirxx2h" target="_self">
              <Typography variant="h6">Live chat</Typography>
            </a>
          </Alert>
        </Grid>
      </Grid>
    </>
  );
}
