import React from "react";
import BlurBg from "../../Utilities/BlurBg";
import Header from "../../Header/Header";
import TrendingMovies from "./Trending_Now/TrendingMovies";
import styles from "./topContent.module.css";
import Cta from "./Cta";
export default function TopContent() {
  return (
    <div className={styles.mainTop}>
      {" "}
      <BlurBg />
      <div className={styles.top}>
        <Header />
          <div className={styles.slideShow}></div>
          <Cta/>
          <TrendingMovies />
      </div>
    </div>
  );
}
