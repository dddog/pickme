import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Score from "../score/score";
import styles from "./user.module.css";

const User = ({ match, apiService }) => {
  const { userId, quizId } = match.params;
  const [userName, setUserName] = useState("");
  const [quizName, setQuizName] = useState("");

  const [cookies, setCookie] = useCookies(["userId"]);

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
      {cookies.userId === userId && (
        <>
          <h1 className={styles.title}>
            {userName}님의 {quizName} 링크 공유하기
          </h1>
          <div className={styles.link}>
            <input
              className={styles.input}
              value={`http://localhost:3000/user/${userId}/${quizId}`}
            />
            <button className={styles.copyButton}>링크 복사하기</button>
          </div>
        </>
      )}
      {cookies.userId !== userId && (
        <>
          <h1 className={styles.title}>
            {userName}님의 {quizName} 맞춰보기
          </h1>
          <div className={styles.link}>
            <button className={styles.copyButton}>시작하기</button>
          </div>
        </>
      )}
      <Score userName={userName} />
    </section>
  );
};

export default User;
