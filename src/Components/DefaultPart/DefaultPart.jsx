import React from "react";
import mainImg from "../../assets/mainImg.png";
import styles from "./DefaultPart.module.css";

const DefaultPart = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgageArea}>
        <img src={mainImg} alt="mainImage" />
      </div>
      <h1 className={styles.hOne}>Pockets Notes</h1>
      <p className={styles.defaultInfo}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>

      <div className={styles.endToEndInfo}>
        <span className="material-symbols-outlined">lock</span>
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default DefaultPart;
