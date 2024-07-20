import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { getUserInfo } from "../../../config/services";
import EditUser from "./user";

const styles = {
  tabs: {
    background: "#fff",
  },
  slide: {
    padding: 15,
    minHeight: 100,
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};

const UsersIndex = ({ id }) => {
  const [state, setState] = useState({ index: 0 });

  useEffect(() => {
    getUserInfo(id);
  }, []);

  const handleChange = (event, value) => {
    console.log(value);
    setState({
      index: value,
    });
  };

  const handleChangeIndex = (index) => {
    setState({
      index: index,
    });
  };

  const { index } = state;

  const accountarrays = ["savings", "overdraft"];

  return (
    <div>
      <Tabs
        variant="fullWidth"
        value={state.index}
        fullWidth
        onChange={handleChange}
        style={styles.tabs}
      >
        {accountarrays.map((account, index) => (
          <Tab label={account} key={index} />
        ))}
      </Tabs>
      <SwipeableViews
        index={index}
        onChangeIndex={(index) => handleChangeIndex(index)}
      >
        {accountarrays.map((account, index) => (
          <div style={Object.assign({}, styles.slide)} key={index}>
            <EditUser type={account} id={id} />
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
};

export default UsersIndex;
