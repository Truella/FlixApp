import React from "react";
import styles from "./faqItem.module.css";
export default function FaqItem({
  question,
  answer,
  index,
  openIndex,
  setOpenIndex,
}) {
  const toggleFAQ = (index) => {
    setOpenIndex((prevSate) => (prevSate === index ? null : index));
  };
  return (
    <li className={styles.FaqItem_container}>
      <div className={styles.Q_containerFlex} onClick={() => toggleFAQ(index)}>
        <div>{question}</div>
        {openIndex === index && <span>-</span>}
        {openIndex !== index && <span>+</span>}
      </div>
      {<div className={openIndex === index ? styles.A_container : styles.A_containerClose}>{answer}</div>}
    </li>
  );
}
