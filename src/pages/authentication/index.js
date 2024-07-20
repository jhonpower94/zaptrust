import { Box, CircularProgress, Container, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
    // height: "100vh",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: theme.palette.primary.main,
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
  padding: {
    padding: theme.spacing(3),
  },
  footer: {
    position: "absolute",
    padding: theme.spacing(4),

    width: "100%",
    textAlign: "center",
  },
}));

export function FacebookCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </div>
  );
}

function AuthenticationIndex(props) {
  const loading = useSelector((state) => state.loading);
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="xs">{props.children}</Container>
    </React.Fragment>
  );
}

export default AuthenticationIndex;

/*
{loading.loading ? (
        <Box display="flex" flexDirection="column" alignItems="center" mt={20}>
          <FacebookCircularProgress />
        </Box>
      ) : (
        <Container maxWidth="xs">{props.children}</Container>
      )}
      */
