import React from "react";
import styles from "./pick.module.css";

const Pick = ({ img }) => (
  <div className={styles.pick}>
    <a className={styles.link} href="#">
      <img
        className={styles.img}
        key={img.key}
        src={img.fileUrl}
        alt={img.title}
      ></img>
      <div className={styles.container}>
        <h4>{img.title}</h4>
      </div>
    </a>
  </div>
);

export default Pick;
