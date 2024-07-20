import { MenuItem, Select, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

import SwipeableViews from "react-swipeable-views";
import TransferMain from "./main";

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

const TransferIndex = ({ account }) => {
  const isSavings = account === "savings";

  const [state, setState] = useState({ index: isSavings ? 0 : 1 });

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
            <TransferMain type={account} />
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
};

export default TransferIndex;
