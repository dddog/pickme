import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./home.module.css";

const Home = (props) => {
  const history = useHistory();

  const userNameRef = useRef();

  const [cookies, setCookie] = useCookies(["userName"]);

  const onSubmit = (event) => {
    event.preventDefault();

    const userName = userNameRef.current.value;
    setCookie("userName", userName, { maxAge: 36000000 });
    history.push({
      pathname: "/quiz",
      state: {
        userName: userName,
      },
    });
  };

  useEffect(() => {
    userNameRef.current.value = cookies.userName || "";
    userNameRef.current.focus();
  });

  return (
    <section className={styles.home}>
      <Header />
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
                  placeholder="이름을 입력하세요"
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
      <Footer />
    </section>
  );
};

export default Home;
