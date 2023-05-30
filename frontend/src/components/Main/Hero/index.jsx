import React from "react";
import styles from "../Hero/index.module.css"

const Hero = () => {
  return (
    <>
   <div className={styles.parentHero}>
    <div className={styles.textHero}>
      <h1 className={styles.heroH1}>24/7 Customer Support</h1>
    </div>
    <div className={styles.heroButtons}>
      <button className={styles.heroRegisterButton}>Donwload</button>
      <button className={styles.heroLoginButton}>Get IN Touch</button>
    </div>
   </div>
    </>
  );
};

export default Hero;
