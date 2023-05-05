import React from "react";
import classes from "./ContanctMe.module.css";
import { myself } from "../img";
import { Envelope, ReadCvLogo } from "@phosphor-icons/react";

const ContactMe = () => {
  return (
    <div className={classes.contactContainer} id="contactme">
      <div className={classes.imageContainer}>
        <img src={myself} alt="Contact Me" className={classes.image} />
      </div>
      <div className={classes.textContainer}>
        <h1 className={classes.heading}>Contact Me</h1>
        <p className={classes.text}>
          I'm always excited to hear about{" "}
          <span style={{ color: "#E21C21", fontWeight: 600 }}>
            new projects
          </span>{" "}
          and collaborate with clients to bring their{" "}
          <span style={{ color: "#79CFE3", fontWeight: 600 }}>vision</span> to
          life. Whether you're looking for a{" "}
          <span style={{ color: "#A881DE", fontWeight: 600 }}>
            custom design
          </span>
          , a{" "}
          <span style={{ color: "#ECDA10", fontWeight: 600 }}>
            new application
          </span>
          , or just need some advice on your next project, I'm here to help.
          Please don't hesitate to{" "}
          <span style={{ color: "#eb9230", fontWeight: 600 }}>contact me</span>{" "}
          using the information below. I look forward to hearing from you!
        </p>
        <ul className={classes.list}>
          <li className={classes.link}>
            <span className={classes.iconContainter}>
              <Envelope size={32} color="#fff" />
            </span>
            <a href="mailto:info@example.com">nicktsesmetzis@gmail.com</a>
          </li>
          <li className={classes.link}>
            <span className={classes.iconContainter}>
              <ReadCvLogo size={32} />
            </span>
            <a
              href="https://drive.google.com/file/d/1WLHblTEYgoizbzUCKH3pJU3oM0k2RdBv/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              Curriculum Vitae
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
