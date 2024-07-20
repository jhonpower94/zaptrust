import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { getUserInfo } from "../../../config/services";
import CreateTransaction from "./createtransaction";

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

const CreateTransferIndex = ({ id }) => {
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
      <CreateTransaction type={"savings"} id={id} />
    </div>
  );
};

export default CreateTransferIndex;
