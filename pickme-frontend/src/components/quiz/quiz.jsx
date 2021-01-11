import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Pick from "../pick/pick";
import styles from "./quiz.module.css";

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
  }, [apiService, pickNo, quizId]);
  return (
    <section className={styles.quiz}>
      <h1 className={styles.title}>
        {userName}님의 {quizName}
      </h1>
      <ul className={styles.pick}>
        {images.map((img) => (
          <Pick img={img} />
        ))}
      </ul>
    </section>
  );
};

export default Quiz;
