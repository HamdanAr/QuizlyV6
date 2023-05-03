import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { SIZES } from "../constants";

export function Score({ imgUrl, category, score }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        verticalAlign: "middle",
        justifyContent: "center",
        // backgroundColor: "black",
        width: Dimensions.get("window").width / 2 - 10,
        height: "100%",
      }}
    >
      <View>
        <Image source={imgUrl}></Image>
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: "black" }}>{category}</Text>
        <Text style={{ color: "black" }}>{score}</Text>
      </View>
    </View>
  );
}
