import React from "react";
import styles from "./Home.page.module.scss";
import banner from "../img/top-banner.png";
import servicesOne from "../img/service-01.svg";
import servicesTwo from "../img/service-02.svg";
import servicesThree from "../img/service-03.svg";
import servicesFour from "../img/service-04.svg";
import aboutImg from "../img/about.png";
import { Link } from "react-router-dom";

interface IProps {
  name?: string;
}

const HomePage: React.FunctionComponent<IProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h2>
            <span>Pacific Star</span> International Services
          </h2>
          <p>
            A trip without a plan is just a nightmare full of pit holes along
            the way
          </p>
          <Link to="/about">Read More</Link>
        </div>

        <img src={banner} alt="" />
      </div>
      <div className={styles.services}>
        <div className="wrapper">
          <h2>Our Solutions</h2>
          <h3>Services</h3>
          <p>
            Curabitur sed facilisis erat. Vestibulum pharetra eros eget
            fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis
            sapien, quis commodo libero.
          </p>
          <ul>
            <li>
              <Link to="/services">
                <span className={styles.icon}>
                  <img src={servicesOne} alt="" />
                </span>
                <strong>Hospitality Services</strong>
                <span className={styles.detail}>
                  Integer molestie magna in augue euismod,
                </span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span className={styles.icon}>
                  <img src={servicesTwo} alt="" />
                </span>
                <strong>Contracting</strong>
                <span className={styles.detail}>
                  Integer molestie magna in augue euismod,
                </span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span className={styles.icon}>
                  <img src={servicesThree} alt="" />
                </span>
                <strong>Transportation</strong>
                <span className={styles.detail}>
                  Integer molestie magna in augue euismod,
                </span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span className={styles.icon}>
                  <img src={servicesFour} alt="" />
                </span>
                <strong>Document Clearance</strong>
                <span className={styles.detail}>
                  Integer molestie magna in augue euismod,
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.aboutInfo}>
        <div className="wrapper">
          <div className={styles.aboutBox}>
            <div className={styles.aboutTest}>
              <h2>Get To Know</h2>
              <h3>About Us</h3>
              <p>
                Is one of the ideal trading contracting and hospitality
                companies in Qatar. The company generates contact and contacts
                for potential visitors, mainly focusing on trading, contracting,
                cleaning, hospitality services, Transportation & documents
                Clearance, Our goal is to provide a wide variety of choices
                under our ministration while achieving sustainable growth.
              </p>
              <Link to="/about">Read More</Link>
            </div>
            <div className={styles.aboutImg}>
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
