import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import "@fontsource/roboto-mono";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <header className={`${classes.header} ${isSticky ? classes.sticky : ""}`}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="#top">//home</a>
          </li>
          <li>
            <a href="#expertise">//expertise</a>
          </li>
          <li>
            <a href="#work">//portfolio</a>
          </li>
          <li>
            <a href="#contactme">//contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
