import React from "react";
import styles from './blurBg.module.css'
export default function BlurBg() {
  return (
    <div className={styles.OuterContainer}>
      <div className={styles.imgBg}></div>
      <div className={styles.gradientBgOne}></div>
      <div className={styles.gradientBgTwo}></div>
    </div>
  );
}
