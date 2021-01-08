import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Quiz = ({ match, apiService }) => {
  const historyState = useHistory().location.state;
  const [userName] = useState(historyState && historyState.userName);
  const [quizName] = useState(historyState && historyState.quizName);
  const [images, setImages] = useState([]);

  const { quizId, pickNo } = match.params;
  useEffect(() => {
    apiService.getPick(quizId, pickNo).then((pick) => {
      setImages([pick.images[0], pick.images[1]]);
      // setImages(pick.images);
    });
  }, [apiService]);
  console.log(images);
  return (
    <div>
      <h1>
        {userName}님의 {quizName}
      </h1>
      {images.map((img) => (
        <img src={img.fileUrl}></img>
      ))}
    </div>
  );
};

export default Quiz;
