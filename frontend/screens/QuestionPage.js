import React from "react";
import { Text, Dimensions, View, TouchableOpacity, Image } from "react-native";
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

export function QuestionPage() {
  //   const windowWidth = Dimensions.get("window");
  return (
    <Background>
      {/* <CircleButton imgUrl={assets.heart} right={10} top={10}></CircleButton> */}
      <CircleButton imgUrl={assets.heart} left={10} top={10}></CircleButton>
      <CustomText
        color={COLORS.gray}
        fontSize={SIZES.medium}
        // textAlign={"center"}
        marginTop={50}
        marginBottom={0}
        paddingBottom={0}
        paddingTop={30}
        marginLeft={15}
      >
        Question 1
      </CustomText>
      <CustomText
        color={COLORS.white}
        fontSize={20}
        margin={15}
        marginTop={0}
        paddingTop={0}
      >
        Who Won the First World Cup?
      </CustomText>
      {/* <ScoreDisplay></ScoreDisplay> */}
      {/* <Text
        style={{
          backgroundColor: COLORS.white,
          color: COLORS.lightPurple,
          width: 60,
          marginLeft: 15,
          marginTop: 10,
          borderRadius: SIZES.medium,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        Level 3
      </Text> */}
      {/* <Text
        style={{
          // backgroundColor: COLORS.white,
          color: COLORS.white,
          fontSize: 30,
          // width: 60
          marginLeft: 15,
          marginTop: 20,
          borderRadius: SIZES.medium,
          justifyContent: "center",
          marginBottom: 10,
          // alignItems: "center",
          // textAlign: "center",
        }}
      >
        Recent Quiz
      </Text> */}
      {/* <View style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <QuizDisplay></QuizDisplay>
        <QuizDisplay></QuizDisplay>
      </View> */}
      {/* <SubmitButton text={"Continue"} marginTop={20}></SubmitButton> */}
      <QuestionPageImage></QuestionPageImage>
      <QuizOption></QuizOption>
      <QuizOption></QuizOption>
      <QuizOption></QuizOption>
      <QuizOption></QuizOption>
    </Background>
  );
}
