import React from "react";
import LandingPageForm from "./LandingPageForm";
import styles from "./cta.module.css";
export default function Cta() {
  return (
    <div className={styles.ctaContainer}>
      <p>
        Ready to watch? Enter your email to ceate or restart your membership
      </p>
      <div className={styles.formContainer}>
        <LandingPageForm />
      </div>
    </div>
  );
}
