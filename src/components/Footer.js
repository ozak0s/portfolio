import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        Created by Nick Tsesmetzis &copy; {new Date().getFullYear()} All rights
        reserved
      </div>
    </div>
  );
};

export default Footer;
