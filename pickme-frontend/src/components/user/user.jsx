import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import Score from "../score/score";
import styles from "./user.module.css";

const User = ({ match, apiService }) => {
  const { userId, quizId } = match.params;
  const [userName, setUserName] = useState("");
  const [quizName, setQuizName] = useState("");
  const [scoreList, setScoreList] = useState([]);

  const [cookies] = useCookies(["userId"]);

  const linkInputRef = useRef();

  const onClickCopy = () => {
    const tempElem = document.createElement("textarea");
    tempElem.value = linkInputRef.current.value;
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);

    alert("복사완료! 친구들에게 공유해보세요.");
  };

  useEffect(() => {
    const user = apiService.getUser(userId);
    user.then((user) => {
      setUserName(user.name);
      setScoreList(user.scoreList ? Object.values(user.scoreList) : []);
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
              ref={linkInputRef}
              className={styles.linkInput}
              value={`http://localhost:3000/user/${userId}/${quizId}`}
              readOnly
            />
            <button className={styles.copyButton} onClick={onClickCopy}>
              링크 복사하기
            </button>
          </div>
        </>
      )}
      {cookies.userId !== userId && (
        <>
          <h1 className={styles.title}>
            {userName}님의 {quizName} 맞춰보기
          </h1>
          <div className={styles.inputList}>
            <span className={styles.span}>별명</span>
            <input
              className={styles.input}
              type="text"
              placeholder="별명을 입력하세요"
            />
          </div>
          <div className={styles.testContent}>
            <button className={styles.copyButton}>시작하기</button>
          </div>
        </>
      )}
      <div>
        <h1 className={styles.title}>누가 {userName}님을 가장 잘 알까요?</h1>
        {scoreList.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>이름</th>
                <th>점수</th>
              </tr>
            </thead>
            <tbody>
              {scoreList.map((score, index) => {
                return (
                  <Score name={score.name} score={score.score} key={index} />
                );
              })}
            </tbody>
          </table>
        ) : (
          <></>
        )}
      </div>
      <Score />
    </section>
  );
};

export default User;
