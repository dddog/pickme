import React from "react";
import styles from "./score.module.css";

const Score = ({ name, score, index }) => {
  return (
    <tr className={styles.tr} key={index}>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

export default Score;
