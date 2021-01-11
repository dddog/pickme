import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import styles from "./home.module.css";

const Home = ({ apiService }) => {
  const history = useHistory();

  const userNameRef = useRef();

  const [cookies, setCookie] = useCookies(["userName"]);

  const onSubmit = (event) => {
    event.preventDefault();

    const userName = userNameRef.current.value;
    setCookie("userName", userName, { maxAge: 36000000 });

    const quiz = apiService.getQuiz();
    quiz.then((quiz) => {
      history.push({
        pathname: `/quiz/${quiz.key}`, // quiz 첫번째 문제
        state: {
          userName: userName,
          quizName: quiz.name,
          totalCnt: quiz.totalCnt,
        },
      });
    });
  };

  useEffect(() => {
    userNameRef.current.value = cookies.userName || "";
    userNameRef.current.focus();
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>나를 맞춰줘!</h1>
          <form>
            <ul className={styles.list}>
              <li className={`${styles.item} ${styles.inputList}`}>
                <span className={styles.span}>별명</span>
                <input
                  className={styles.input}
                  ref={userNameRef}
                  type="text"
                  placeholder="별명을 입력하세요"
                />
              </li>
              <li className={styles.item}>
                <button className={styles.button} onClick={onSubmit}>
                  시작하기
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
