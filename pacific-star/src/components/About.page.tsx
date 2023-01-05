import React from "react";
import styles from "./About.page.module.css";

interface IProps {
  name?: string;
}

const AboutPage: React.FunctionComponent<IProps> = ({ name }) => {
  return <div className={styles.container}>About Page</div>;
};

export default AboutPage;
