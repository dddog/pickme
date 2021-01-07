import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => (
  <footer className={styles.footer}>
    <p className={styles.title}>
      <span className={styles.text}>문의하기</span>
      <a className={styles.contact} href="mailto:dddog0000@gmail.com">
        <span>dddog0000@gmail.com</span>
      </a>
    </p>
  </footer>
));

export default Footer;
