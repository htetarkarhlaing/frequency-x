import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
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
      <div className={styles.space}>
      </div>
      <ul className={styles.linkWrapper}>
        <Link href="/">
          <li className={styles.linkItem}>Home</li>
        </Link>
        <Link href="/">
          <li className={styles.linkItem}>Services</li>
        </Link>
        <Link href="/">
          <li className={styles.linkItem}>Partners</li>
        </Link>
        <Link href="/">
          <li className={styles.linkItem}>About</li>
        </Link>
        <Link href="/">
          <li className={styles.linkItem}>Contact Me</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
