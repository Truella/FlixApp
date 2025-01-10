import React from "react";
import styles from "./form.module.css";
export default function Form() {
  return (
    <form className={styles.signUpForm}>
      <input type="email" name="email" id="emailInput" />
      <input type="password" name="password" id="passwordInput" />
      <input type="submit" value="Sign In" />
      <p style={{ color: "rgba(255, 255, 255, 0.7)"}}>OR</p>
      <input type="button" value="Use a sign-in code" />
      <p className={styles.forgotPswd}>Forgot password?</p>
      <div style={{ textAlign: 'left' }}>
        <label htmlFor="check_box">
          {" "}
          <input type="checkbox" name="rememberUser" id="check_box" />{" "}
          <span>Remember me</span>
        </label>
        <p>
          New to Netflix? <a href="#">Sign up now</a>
        </p>
      </div>
    </form>
  );
}
