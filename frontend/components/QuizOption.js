import React, { useState } from "react";
import { Dimensions, View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { addOneToScore } from "../redux/score-slice/ScoreSlice";

export function QuizOption({ option, correctOption }) {
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();

  const [optionSelected, setOptionSelected] = useState("");
  const onPressHandler = (optionSelected) => {
    setOptionSelected(optionSelected);
    if (optionSelected.option === correctOption) {
      console.log(score);
      dispatch(addOneToScore(score));
      // console.log(score);
      // console.log("i am hit");
    } else {
      console.log("Wrong Answer");
    }
  };

  return (
    <TouchableOpacity
      onPress={() => onPressHandler({ option })}
      style={{
        margin: 15,
        marginBottom: 5,
        width: Dimensions.get("window").width - 30,
        height: Dimensions.get("window").height / 18,
        justifyContent: "center",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
      }}
    >
      <Text
        style={{
          // backgroundColor: "white",
          color: COLORS.black,
          textAlignVertical: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {option}
      </Text>
    </TouchableOpacity>
  );
}
