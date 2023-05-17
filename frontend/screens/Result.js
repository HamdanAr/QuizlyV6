import { Text, Dimensions, View, TouchableOpacity } from "react-native";
import {
  CircleButton,
  CustomText,
  RectButton,
  Input,
  SubmitButton,
  ScoreDisplay,
  QuizDisplay,
} from "../components";
import { Background } from "../boilerplate";
import { assets, COLORS, SIZES } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export function Result() {
  const navigation = useNavigation();
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();
  //   const windowWidth = Dimensions.get("window");

  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <Background>
      <CircleButton imgUrl={assets.profile} right={10} top={10}></CircleButton>
      <CircleButton imgUrl={assets.hum} left={10} top={10}></CircleButton>
      <CustomText
        color={COLORS.white}
        // fontSize={SIZES.medium}
        // textAlign={"center"}
        margin={15}
        marginBottom={0}
        paddingBottom={0}
        paddingTop={30}
        textAlign={"center"}
        fontSize={40}
      >
        Good Job
      </CustomText>
      <CustomText
        color={COLORS.white}
        // fontSize={SIZES.medium}
        // textAlign={"center"}
        margin={15}
        marginBottom={0}
        paddingBottom={0}
        paddingTop={30}
        // textAlign={"center"}
        fontSize={20}
      >
        You Got {score} correct answers
      </CustomText>
      {/* <CustomText
        color={COLORS.white}
        fontSize={30}
        margin={15}
        marginTop={0}
        paddingTop={0}
      >
        Lets Play
      </CustomText> */}
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
      {/* <Text>You </Text> */}
      <SubmitButton
        text={"Back To Home"}
        marginTop={40}
        onPressHandler={onPressHandler}
      ></SubmitButton>
    </Background>
  );
}
