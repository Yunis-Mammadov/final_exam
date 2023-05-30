import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../Footer/index.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p style={{color:"white"}}>
        Copyright © 2023 All Rights Reserved | This template is made{" "}
        <FavoriteIcon sx={{color:"rgb(242,58,46)"}} /> <span style={{ color: "gray" }}>by</span> Colorlib
      </p>
    </div>
  );
};

export default Footer;
