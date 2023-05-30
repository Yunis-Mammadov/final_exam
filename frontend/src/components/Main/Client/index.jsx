import React from "react";
import styles from "../Client/index.module.css"

const Client = () => {
  return (
    <>
  <div className={styles.clientHero}>
    <div className={styles.textClient}>
      <h1 className={styles.serverH1}>Satisfied Clients</h1>
      <p className={styles.serverP}>We are rated 4.99 / 5.00 (based on 4443 Reviews)</p>
      <button className={styles.clientButton}>Register Now</button>
    </div>
  </div>
    </>
  );
};

export default Client;
