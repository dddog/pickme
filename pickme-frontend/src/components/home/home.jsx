import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import styles from "./home.module.css";

const Home = (props) => {
  const history = useHistory();

  const userNameRef = useRef();

  const [cookies, setCookie, removeCookie] = useCookies(["userName"]);

  const onSubmit = (event) => {
    console.log(userNameRef.current.value);
    history.push({
      pathname: "/quiz",
      state: {
        userName: userNameRef.current.value,
      },
    });
  };

  useEffect(() => {
    console.log(`cookies.userName>>>${cookies.userName}`);
  });

  return (
    <section>
      <section>
        <h1>나를 맞춰줘!</h1>
        <ul>
          <li>
            <input
              ref={userNameRef}
              type="text"
              placeholder="이름을 입력하세요"
            />
          </li>
          <li>
            <button onClick={onSubmit}>시작하기</button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Home;
