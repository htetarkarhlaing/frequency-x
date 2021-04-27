import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { links } from "./Header.json";

const OnDesktop = () => {
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
        <div className={styles.logo}>DELTA TECH</div>
      </Link>
      <div className={styles.space}></div>
      <ul className={styles.linkWrapper}>
        {links.map((item, key) => {
          return (
            <Link key={key} href={item.path} >
              <li key={key} className={styles.linkItem}>{item.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default OnDesktop;
