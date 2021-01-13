import React from "react";
import styles from "./score.module.css";

const Score = ({ name, score }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

export default Score;
