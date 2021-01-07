import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Quiz = ({ apiService }) => {
  const historyState = useHistory().location.state;
  const [userName] = useState(historyState && historyState.userName);
  const [quizName] = useState(historyState && historyState.quizName);
  // const [quizName, setQuizName] = useState("");

  return (
    <h1>
      {userName}님의 {quizName}
    </h1>
  );
};

export default Quiz;
