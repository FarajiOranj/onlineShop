import React, { useState } from "react";
import styled from "styled-components";

// Styles & Img
import styles from "../styles/AboutMe.module.css";
import Logo from "../images/mySelf.jpeg";
import FED_Logo from "../images/frontEnd.png";

// Social Medias Logos
import ig from "../images/instagram-50.png";
import gh from "../images/github-50.png";
import gm from "../images/gmail-50.png";
import ld from "../images/linkedin-50.png";
import tg from "../images/telegram-50.png";

const Div = styled.div`
  border-radius: ${(props) => (props.isOpen ? "12px 12px 0 0" : "0")};
  box-shadow: -1px -1px 1px #000, 1px -1px 1px #000;
  background: #f8f5f5;
  width: 240px;
  height: ${(props) => (props.isOpen ? "40px" : "0px")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  transition: all 1s;

  .swipContainer {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline: 1.5px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${(props) => (props.isOpen ? "40px" : "1px")};
    background-color: ${(props) => (props.isOpen ? "#C60C30" : "#007FFF")};
    cursor: pointer;
    transition: all 1s ease;
  }

  .swipContained1 {
    position: absolute;
    width: 10px;
    height: 2px;
    background: #fff;
    transform: rotate(-45deg);
    left: ${(props) => (props.isOpen ? "5px" : "2px")};
    transition: all 0.5s;
  }

  .swipContained2 {
    position: absolute;
    width: 10px;
    height: 2px;
    background: #fff;
    transform: rotate(45deg);
    right: ${(props) => (props.isOpen ? "5px" : "2px")};
    transition: all 0.5s;
  }

  img {
    position: absolute;
    top: 13px;
    width: 25px;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: all 0.5s;
    cursor: pointer;
  }

  img:hover {
    transform: rotate(360deg);
  }

  .tg {
    right: 62px;
    top: 14px;
  }

  .tg:hover {
    filter: drop-shadow(0px 0px 5px blue);
  }

  .ig {
    right: 15px;
    top: 15px;
  }

  .ig:hover {
    filter: drop-shadow(1px 1px 5px green);
  }

  .gm {
    left: 107.5px;
    top: 14px;
  }

  .gm:hover {
    filter: drop-shadow(0px 0px 5px red);
  }

  .ld {
    left: 62px;
  }

  .ld:hover {
    filter: drop-shadow(0px 0px 4px #0039a6);
  }

  .gh {
    left: 15px;
  }

  .gh:hover {
    filter: drop-shadow(0px 0px 4px #002d62);
  }
`;

const AboutUs = () => {
  let [socials, setSocial] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.forBetterHover}>
          <div className={styles.infoContainer}>
            <img src={Logo} alt="mySelf" className={styles.logo} />
            <p className={styles.nameInfo}>
              <span style={{ display: "inline-block" }}>
                <span className={styles.explainer}>Name:</span> MohammadReza
              </span>
              <span className={styles.lName}>
                <span className={styles.explainer}>LastName:</span> Faraji
              </span>
            </p>
            <p className={styles.ageInfo}>
              <span className={styles.explainer}>Date of birth: </span>
              <span className={styles.date}>26/11/2000</span>
            </p>
            <p className={styles.skillsInfo}>
              <span className={styles.explainer2}>skills :</span>
              <span className={styles.sR}> Reactjs</span>,
              <span className={styles.sJ}> JavaScript</span>,
              <span className={styles.sC}> CSS</span>,
              <span className={styles.sG}> Git</span>,
              <span className={styles.sN}> NPM</span>,
              <span className={styles.sS}> Sass</span>,
              <span className={styles.sH}> HTML</span>.
            </p>
          </div>
        </div>
        <div className={styles.fedContainer}>
          <img src={FED_Logo} alt="FED_Logo" />
          <h2 className={styles.extendTitle}>Front-End Developer</h2>
        </div>
        <Div isOpen={socials}>
          <div
            className="swipContainer"
            onClick={() => setSocial((prevSocials) => !prevSocials)}
          >
            <div className="swipContained1"></div>
            <div className="swipContained2"></div>
          </div>
          <img className="gh" src={gh} alt="gitHub" />
          <img className="ld" src={ld} alt="linkedin" />
          <img className="gm" src={gm} alt="gmailContact" />
          <img className="ig" src={ig} alt="instagram" />
          <img className="tg" src={tg} alt="telegram" />
        </Div>
      </div>
    </div>
  );
};

export default AboutUs;
