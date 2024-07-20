import * as React from "react";
import {
  Alert,
  AlertTitle,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { notification$ } from "../redux/action";
import { navigate } from "@reach/router";

export default function SuccessPage() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} md={6}>
          <Alert variant="standard" severity="success">
            <AlertTitle>Transfer Successfull</AlertTitle>
            <Stack spacing={2}>
              <Typography>Your transaction was successful 👍</Typography>
              <Button disableElevation variant="contained" color="success" onClick={()=>{
                navigate("account")
              }}>
                Confirm
              </Button>
            </Stack>
          </Alert>
        </Grid>
      </Grid>
    </>
  );
}
