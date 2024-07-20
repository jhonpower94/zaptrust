import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import "./security.css";

export default function SecurityCard(props) {
  const [state, setState] = useState({ otp: "" });
  const handleChange = (otp) => setState({ otp: otp });
  return (
    <>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography p={4} variant="h6">
          {"Enter verification code"}
        </Typography>
        {props.children}
      </CardContent>
    </>
  );
}
