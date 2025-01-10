import React from "react";
import styles from './landingPageForm.module.css'
export default function LandingPageForm() {
  return (
    <form className={styles.form}>
      <div className={styles.email_labelContainer}>
        <label htmlFor="emailInput">Email address</label>
        <input type="email" name="email" id="emailInput" />
      </div>
      <input type="submit" value="Get Started >" />
    </form>
  );
}
