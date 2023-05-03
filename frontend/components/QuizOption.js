import React from "react";
import { Dimensions, View, Text } from "react-native";
import { COLORS, SIZES } from "../constants";

export function QuizOption() {
  return (
    <View
      style={{
        margin: 15,
        width: Dimensions.get("window").width - 30,
        height: Dimensions.get("window").height / 18,
        backgroundColor: "black",
        borderRadius: SIZES.medium,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          textAlignVertical: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        1. West Indies
      </Text>
    </View>
  );
}
