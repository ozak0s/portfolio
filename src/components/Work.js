import React from "react";
import styles from "./Work.module.css";
import { dragontale, foodys, forkify, reduxCart } from "../img";

const workItems = [
  {
    image: `${dragontale}`,
    alt: "Dragontale custom website design on wix",
    description: `Custom Web Design on Wix for a gaming club`,
    link: "https://nikostses.wixsite.com/dragontale",
  },
  {
    image: `${foodys}`,
    alt: "Work item 2",
    description: "Food Delivery app made with ReactJS",
    link: "https://main--foodys-nt.netlify.app/",
  },
  {
    image: `${forkify}`,
    alt: "Work item 3",
    description: "Food recipe app created with Javascript and CSS",
    link: "https://forkify-nt.netlify.app",
  },
  {
    image: `${reduxCart}`,
    alt: "Work item 4",
    description: "Sample e-shop app made with React and Redux",
    link: "https://redux-cart-nt.netlify.app",
  },
];

const Work = () => {
  return (
    <div className={styles.work} id="work">
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.gallery}>
        {workItems.map((item) => (
          <div key={item.alt} className={styles.item}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.alt} className={styles.image} />
            </a>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
