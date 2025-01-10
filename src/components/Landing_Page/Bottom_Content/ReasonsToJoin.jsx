import React from "react";
import styles from "./reasonsToJoin.module.css";
const reasons = [
  <div key={"divOne"}>
    {" "}
    <p>Stories tailored to your taste</p>
    <div className={styles.imgDiv}>
      <img src="src\assets\images\screen-mirroring.png" alt="" />
    </div>
  </div>,
  <div key={"divTwo"}>
    {" "}
    <p>Cancel or switch plans anytime</p>
    <div className={styles.imgDiv}>
      {" "}
      <img src="src\assets\images\screen-mirroring.png" alt="" />
    </div>
  </div>,
  <div key={"divThree"}>
    {" "}
    <p>A place just for children</p>
    <div className={styles.imgDiv}>
      {" "}
      <img src="src\assets\images\screen-mirroring.png" alt="" />
    </div>
  </div>,
  <div key={"divFour"}>
    {" "}
    <p>For your phone, tablet, laptop, and TV</p>
    <div className={styles.imgDiv}>
      {" "}
      <img src="src\assets\images\screen-mirroring.png" alt="" />
    </div>
  </div>,
];
export default function ReasonsToJoin() {
  return (
    <div className={styles.reasonsCardContainer}>
      <h2>More reasons to join</h2>
      <div className={styles.flexParent}>
        {" "}
        {reasons.map((reason) => (
          <div key={"one"} className={styles.reasonsCard}>
            {reason}
          </div>
        ))}
      </div>
    </div>
  );
}
