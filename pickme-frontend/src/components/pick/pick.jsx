import React from "react";
import styles from "./pick.module.css";

const Pick = ({ img, onCickPick }) => (
  <div className={styles.pick} onClick={() => onCickPick(img.key)}>
    <img
      className={styles.img}
      key={img.key}
      src={img.fileUrl}
      alt={img.title}
    ></img>
    <div className={styles.container}>
      <h4>{img.title}</h4>
    </div>
  </div>
);

export default Pick;
