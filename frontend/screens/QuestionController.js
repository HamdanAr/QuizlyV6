import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion } from "../redux/qustion-slice/QuestionSlice";
import { QuestionPage } from "./QuestionPage";

export function QuestionController({ route }) {
  const [score, setScore] = useState(0);
  const questions = useSelector((state) => state.question.value);
  const dispatch = useDispatch();
  // console.log(this.props.navigation.getParam("subjectData"));
  //   const windowWidth = Dimensions.get("window");
  const { subjectData } = route.params;
  // console.log(subjectData);

  const fetchQuestion = async (questionId) => {
    await fetch(`http://172.23.0.1:3000/questions/${questionId}`)
      .then((response) => response.json())
      .then((question) => dispatch(addQuestion(question)))
      .catch((err) => console.log("There has been an error" + err.message));
  };

  // console.log(subjectData[0].questions);

  useEffect(() => {
    subjectData.questions.forEach((element) => {
      // console.log("Before calling a function");
      fetchQuestion(element);
      // console.log("After calling a function");
    });
  }, []);
  // for (let i = 0; i < 5; i++) {
  //   text += "The number is " + i + "<br>";
  // }

  console.log(questions);
  console.log("hello");
  return (
    <View>
      {questions.map((question) => (
        <QuestionPage question={question} score={score}></QuestionPage>
      ))}
    </View>
  );
}

// export default QuestionController
