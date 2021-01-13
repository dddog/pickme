import React from "react";
import styles from "./score.module.css";

const Score = ({ userName }) => {
  return (
    <>
      <h1 className={styles.title}>누가 {userName}님을 가장 잘 알까요?</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>이름</th>
            <th>점수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>홍길동</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Score;
