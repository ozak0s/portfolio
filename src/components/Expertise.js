import React from "react";
import styles from "./Expertise.module.css";

const Expertise = () => {
  const topText = "<h3>";
  const botText = "</h3>";
  return (
    <div className={styles.container} id="expertise">
      <div className={styles.title}>
        <h2>My Expertise</h2>
      </div>
      <div className={styles.expertise}>
        <div className={`${styles.box} ${styles.title1}`}>
          <h3 className={styles["top-text"]}>{topText}</h3>
          <h2>Front End Dev</h2>
          <h3 className={styles["bottom-text"]}>{botText}</h3>
          <p>
            Over 1 year of experience as a freelancer with{" "}
            <span style={{ color: "#E21C21", fontWeight: 600 }}>HTML</span>,{" "}
            <span style={{ color: "#A881DE", fontWeight: 600 }}>CSS</span> and{" "}
            <span style={{ color: "#ECDA10", fontWeight: 600 }}>
              Javascript
            </span>{" "}
            and{" "}
            <span style={{ color: "#79CFE3", fontWeight: 600 }}>ReactJS</span>.
            Basic knowledge of{" "}
            <span style={{ color: "#eb9230", fontWeight: 600 }}>Python</span>{" "}
            and continously evolving skills.
          </p>
        </div>
        <div className={`${styles.box} ${styles.title2}`}>
          <h3 className={styles["top-text"]}>{topText}</h3>
          <h2>IT Technician</h2>
          <h3 className={styles["bottom-text"]}>{botText}</h3>
          <p>
            Over 5 years of experience providing{" "}
            <span style={{ color: "#ECDA10", fontWeight: 600 }}>IT</span>{" "}
            support{" "}
            <span style={{ color: "#E21C21", fontWeight: 600 }}>services</span>{" "}
            on companies and public offices. Passionate with PC{" "}
            <span style={{ color: "#A881DE", fontWeight: 600 }}>building</span>{" "}
            &{" "}
            <span style={{ color: "#eb9230", fontWeight: 600 }}>repairing</span>{" "}
            since a very young age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
