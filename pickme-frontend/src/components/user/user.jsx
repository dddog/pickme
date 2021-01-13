import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Score from "../score/score";
import styles from "./user.module.css";

const User = ({ match, apiService }) => {
  const { userId, quizId } = match.params;
  const [userName, setUserName] = useState("");
  const [quizName, setQuizName] = useState("");
  const [scoreList, setScoreList] = useState([]);

  const [cookies, setCookie] = useCookies(["userId"]);

  useEffect(() => {
    const user = apiService.getUser(userId);
    user.then((user) => {
      setUserName(user.name);
      setScoreList(Object.values(user.scoreList));
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
      <div>
        <h1 className={styles.title}>누가 {userName}님을 가장 잘 알까요?</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>이름</th>
              <th>점수</th>
            </tr>
          </thead>
          <tbody>
            {scoreList.map((score) => {
              return <Score name={score.name} score={score.score} />;
            })}
          </tbody>
        </table>
      </div>
      <Score />
    </section>
  );
};

export default User;
