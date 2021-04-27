import React, { useState, useEffect } from "react";
import OnDesktop from "./OnDesktop";
import OnMobile from "./OnMobile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  }, []);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  if (isMobile) {
    return <OnMobile />;
  } else {
    return <OnDesktop />;
  }
};

export default Header;
