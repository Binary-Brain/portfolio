import React from "react";
import styles from "./Footer.module.css";
import github from "../assets/github.svg";

const Footer = () => {
  return (
    <div className={styles['footer-div']}>
      <strong>
        <span>©</span>
          Ankit Meena
      </strong>

      <div className={styles['social-links']}>
        <a href="https://github.com/Binary-Brain">
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
