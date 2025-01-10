import React from "react";
import styles from "./signUpPage.module.css";
import NetflixIcon from "../Header/NetFlixIcon";
import Form from "./Form";
import Footer from '../Landing_Page/Bottom_Content/Footer/Footer'
export default function SignUpPage() {
  return (
    <>
      {" "}
      <div className={styles.bgImage}>
        <div className={styles.absolutePos}></div>
        <div className={styles.logoContainer}>
          <NetflixIcon />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formParent}>
            <div>
              {" "}
              <h1>Sign In</h1>
            </div>
            <Form />
          </div>
        </div>
      </div>{" "}
    <Footer/>
    </>
  );
}
