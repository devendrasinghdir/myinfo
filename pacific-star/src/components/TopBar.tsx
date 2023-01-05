import React from "react";
import styles from "./TobBar.module.scss";
import clockIcon from "../img/clock.svg";

interface IProps {
  name?: string;
}

const TopBar: React.FunctionComponent<IProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <ul>
          <li>Call Us: 548978478</li>
          <li>Email us: demo@example.com</li>
          <li>
            <img src={clockIcon} alt="" />
            08:00 am - 06:00 pm
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
