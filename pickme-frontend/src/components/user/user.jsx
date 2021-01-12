import React, { useEffect, useState } from "react";
import styles from "./user.module.css";

const User = ({ match, apiService }) => {
  const { userId, quizId } = match.params;
  const [userName, setUserName] = useState("");
  const [quizName, setQuizName] = useState("");

  useEffect(() => {
    const user = apiService.getUser(userId);
    user.then((user) => {
      setUserName(user.name);
    });
    const quiz = apiService.getQuiz();
    quiz.then((quiz) => {
      setQuizName(quiz.name);
    });
  }, [apiService, userId]);
  return (
    <section className={styles.user}>
      <h1 className={styles.title}>
        {userName}님의 {quizName} 링크 공유하기
      </h1>
      <div className={styles.link}>
        <input
          className={styles.input}
          value={`http://localhost:3000/test/${userId}/${quizId}`}
        />
        <button className={styles.copyButton}>링크 복사하기</button>
      </div>
    </section>
  );
};

export default User;
