import React from "react";
import styles from "./Work.module.css";
import {
  dragontale,
  foodys,
  forkify,
  reduxCart,
  beachaps,
  eAdmin,
  eShop,
} from "../img";

const workItems = [
  {
    image: `${dragontale}`,
    alt: "Dragontale custom website design on wix",
    description: `Custom Web Design on Wix for a gaming club`,
    link: "https://nikostses.wixsite.com/dragontale",
  },
  {
    image: `${beachaps}`,
    alt: "Beach Apartments",
    description: `Rental beach apartments website with React Routing & React Context`,
    link: "https://beach-apartments.netlify.app/",
  },
  {
    image: `${eAdmin}`,
    alt: "Admin Eshop managing product page",
    description: `E-Commerce Admin Managing Page made with Next.js and tailwind using MongoDB`,
    link: "https://admin-page-xi-two.vercel.app/",
  },
  {
    image: `${eShop}`,
    alt: "Eshop front-end web page",
    description: `E-commerce front-end webpage made with Next.js using styled components`,
    link: "https://white-llamma-shop.netlify.app/",
  },
  {
    image: `${foodys}`,
    alt: "food delivery application",
    description: "Food Delivery app made with ReactJs",
    link: "https://main--foodys-nt.netlify.app/",
  },
  {
    image: `${forkify}`,
    alt: "Food recipe application",
    description: "Food recipe app created with Javascript and CSS",
    link: "https://forkify-nt.netlify.app",
  },
  {
    image: `${reduxCart}`,
    alt: "Sample eshop application",
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
