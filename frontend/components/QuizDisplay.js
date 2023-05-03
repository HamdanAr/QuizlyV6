import React from "react";
import { Image, TouchableOpacity, Dimensions, Text } from "react-native";
import { assets, COLORS, SIZES } from "../constants";

export function QuizDisplay({ props }) {
  return (
    <TouchableOpacity
      style={{
        margin: 15,
        // marginTop: 40,
        width: Dimensions.get("window").width / 2 - 30,
        height: Dimensions.get("window").width / 2 - 20,
        backgroundColor: COLORS.white,
        // backgroundColor: "white",
        borderRadius: SIZES.small,
        marginTop: 5,
        marginRigth: 10,
        // width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        ...props,
      }}
    >
      <Image
        source={assets.heart}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}
      ></Image>
      <Text style={{ fontSize: 20 }}>Science</Text>
    </TouchableOpacity>
  );
}
