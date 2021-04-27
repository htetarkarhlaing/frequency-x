import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { links } from "./Header.json";

const OnMobile = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <nav className={scrolled ? styles.headerColor : styles.headerTransparent}>
      <Link href="/">
        <div className={styles.logo}>DT</div>
      </Link>
      <div className={styles.space}></div>
      <button>
         CLick Me
      </button>
    </nav>
  );
};

export default OnMobile;
