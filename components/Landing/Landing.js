import React from "react";
import Header from "../Header/Header";
import ReactTypingEffect from "react-typing-effect";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.innerWrapper}>
        <span className={styles.subtitle}>Hello, my name is</span>
        <span className={styles.name}>Htet ArKar Hlaing</span>
        <ReactTypingEffect
          speed={100}
          eraseSpeed={100}
          eraseDelay={2000}
          typingDelay={1000}
          text={[
            "am Freelancer.",
            "am Full Stack Developer.",
            "create Websites.",
            "create Mobile Applications.",
          ]}
          cursorRenderer={(cursor) => (
            <h1 className={styles.cursour}>{cursor}</h1>
          )}
          displayTextRenderer={(text, i) => {
            return (
              <span className={styles.typingText}>
                I{" "}
                <span>
                  {text.split(" ").map((char, i) => {
                    return (
                      <span
                        className={
                          i !== 0 ? styles.styledTypingText : styles.typingText
                        }
                      >
                        {char} {i !== 0 ? " " : ""}
                      </span>
                    );
                  })}
                </span>
              </span>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Landing;
