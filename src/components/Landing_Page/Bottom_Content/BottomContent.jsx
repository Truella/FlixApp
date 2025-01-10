import React from "react";
import styles from './buttomContent.module.css'
import Footer from "./Footer/Footer";
import Faqs from "./FAQ/Faqs";
import OnlyOnNetFlixMovies from "./OnlyOnNetFlixMovies";
import ReasonsToJoin from "./ReasonsToJoin";

export default function BottomContent() {
  return (
    <div className={styles.landingPage_container}>
      <div className={styles.relativeContent}>
        <OnlyOnNetFlixMovies/>
        <ReasonsToJoin/>
        <Faqs />
        <Footer />
      </div>
    </div>
  );
}
