import { Link, Typography } from "@mui/material";
import React from "react";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {` © 2017 - ${new Date().getFullYear()}  `}
      <Link color="inherit" href="#">
        Enrichment fcu
      </Link>
    </Typography>
  );
}
