import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import download from "../img/download.svg";

interface IProps {
  name?: string;
}

const NavBar: React.FunctionComponent<IProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.navBar}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="" height={90} />
            </Link>
          </div>
          <nav>
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
                <Link to="/careers">careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.download}>
            <Link to="/">
              <img src={download} alt="" /> Download Browser
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
