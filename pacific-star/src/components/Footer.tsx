import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import facebookIcon from "../img/fb.svg";
import twitterIcon from "../img/twitter.svg";
import instaIcon from "../img/insta.svg";
import callIcon from "../img/call.svg";
import emailIcon from "../img/email.svg";

interface IProps {
  name?: string;
}

const FooterPage: React.FunctionComponent<IProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.footerBox}>
          <div className={styles.box}>
            <p>
              A trip without a plan is just a nightmare full of pit holes along
              the way
            </p>
            <ul className={styles.share}>
              <li>
                <Link to="/">
                  <img src={facebookIcon} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={twitterIcon} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={instaIcon} alt="" />
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.box}>
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link to="/">Hospitality Services</Link>
              </li>
              <li>
                <Link to="/">Contracting</Link>
              </li>
              <li>
                <Link to="/">Transportation</Link>
              </li>
              <li>
                <Link to="/">Document Clearance</Link>
              </li>
            </ul>
          </div>
          <div className={styles.box}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.box}>
            <h3>Contact</h3>
            <ul>
              <li>
                <img src={callIcon} alt="" />
                <span>+918447700663</span>
              </li>
              <li>
                <img src={emailIcon} alt="" />
                <span>info@pacificstarinternationalservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyBox}>
          <div className={styles.copy}>
            copyright 2023 @pacificstarinternationalservices
          </div>
          <div className={styles.footLink}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
