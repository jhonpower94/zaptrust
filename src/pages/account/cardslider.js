import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "../components/Pagination";
import CreditCard from "../creditcard";
import { useSelector } from "react-redux";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: "relative",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
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

const CardSlder = () => {
  const savingsinfo = useSelector((state) => state.savingsInfos);
  const checkingsinfo = useSelector((state) => state.checkingsInfos);

  const [state, setState] = useState({
    index: 0,
  });

  const handleChangeIndex = (index) => {
    setState({
      index: index,
    });
  };

  const { index } = state;

  return (
    <div style={styles.root}>
      <AutoPlaySwipeableViews
        enableMouseEvents
        index={index}
        onChangeIndex={(index) => handleChangeIndex(index)}
      >
        {[
          { type: "savings", data: savingsinfo },
          { type: "overdraft", data: checkingsinfo },
        ].map((card, index) => (
          <div style={Object.assign({}, styles.slide)} key={index}>
            <CreditCard type={card.type} data={card.data} />
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Pagination
        dots={2}
        index={index}
        onChangeIndex={(index) => handleChangeIndex(index)}
      />
    </div>
  );
};

export default CardSlder;
