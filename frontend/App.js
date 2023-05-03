import { StyleSheet, Text, View } from "react-native";
import {
  Home,
  Login,
  SignUp,
  QuizCategory,
  QuestionPage,
  Result,
} from "./screens";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Result />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
