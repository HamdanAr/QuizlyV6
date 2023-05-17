import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import {
  CircleButton,
  CustomText,
  RectButton,
  Input,
  SubmitButton,
  ScoreDisplay,
  QuizDisplay,
  QuestionPageImage,
  QuizOption,
} from "../components";
import { Background } from "../boilerplate";
import { assets, COLORS, SIZES } from "../constants";
import { addQuestion } from "../redux/qustion-slice/QuestionSlice";
import { useNavigation } from "@react-navigation/native";
import { VedioRecord } from "./VedioRecord";

export function QuestionPage({ question, index, onNextHandler }) {
  const navigation = useNavigation();
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();

  console.log(question);

  var containOptions = false;
  const onPressHandler = () => {
    if (index < 9) {
      // navigation.navigate("QuestionPage");
      onNextHandler();
    } else if (index == 9) {
      console.log(score);
      navigation.navigate("Result", { score: score });
    }
  };

  if (question.options != null) {
    containOptions = true;
  }
  return (
    <Background>
      {/* <CircleButton imgUrl={assets.heart} right={10} top={10}></CircleButton> */}
      <View>
        <VedioRecord></VedioRecord>
      </View>
      <CircleButton imgUrl={assets.hum} left={10} top={10}></CircleButton>
      <CustomText
        color={COLORS.gray}
        fontSize={SIZES.medium}
        // textAlign={"center"}
        marginTop={0}
        marginBottom={0}
        paddingBottom={0}
        paddingTop={30}
        marginLeft={15}
      >
        {question.question}
      </CustomText>

      <QuestionPageImage></QuestionPageImage>
      {containOptions
        ? question.options.map((option) => (
            <QuizOption
              score={score}
              option={option}
              correctOption={question.correctOption}
              key={Math.random()}
            ></QuizOption>
          ))
        : null}
      <SubmitButton
        onPressHandler={onPressHandler}
        text={"Continue"}
      ></SubmitButton>
    </Background>
  );
}
