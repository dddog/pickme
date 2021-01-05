import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Quiz = (props) => {
  const historyState = useHistory().location.state;
  const [userName, setUserName] = useState(
    historyState && historyState.userName
  );

  return <h1>Quiz {userName}</h1>;
};

export default Quiz;
