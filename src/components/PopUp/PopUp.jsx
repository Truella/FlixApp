import React from "react";
import styles from "./popUp.module.css";
export default function PopUp({ data, loading, backdrop }) {
  return (
    <div className={styles.demo}>
      <div className={styles.pop}>
        <div
          className={`${styles.imgbg} ${loading ? styles.blurryBg : ""}`}
          style={{
            backgroundImage: data
              ? `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`
              : `url(https://image.tmdb.org/t/p/w500/${backdrop})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          {data && <h1>{data.title}</h1>}
        </div>
        <div className={styles.textContainer}>
          <div>
            <span>2024</span>
            <span>12</span>
            <span>Film</span>
            <span>Drama</span>
          </div>
          <div>{data ? data.overview : ""}</div>
          <div>
            <button>Get Started {">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
