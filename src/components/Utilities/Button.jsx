import React from "react";
import styles from './button.module.css'
export default function Button({ value, onClickFn, className }) {
  return <button onClick={onClickFn} className={styles[className]}>{value}</button>;
}
