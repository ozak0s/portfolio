import React from "react";
import styles from "./Main.module.css";
import { LinkedinLogo, GithubLogo, MessengerLogo } from "@phosphor-icons/react";

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        <span style={{ color: "#79cfe3" }}>NICK T</span>
        <span style={{ color: "#fff" }}>.</span>
        <span style={{ color: "#A881DE" }}>_</span>
      </h1>
      <h2 className={styles.secondaryHeading}>
        Front End Web Design & Development.
      </h2>
      <h2 className={styles.secondaryHeading}>IT Support Services.</h2>

      <div className={styles.socialMedia}>
        <a href="https://github.com/ozak0s" target="_blank" rel="noreferrer">
          <GithubLogo color="#fff" size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/nikolaos-tsesmetzis/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo color="#fff" size={28} />
        </a>
        <a href="https://m.me/nikos.tses" target="_blank" rel="noreferrer">
          <MessengerLogo color="#fff" size={28} />
        </a>
      </div>
    </main>
  );
};

export default Main;
