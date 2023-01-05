import React from "react";
import styles from "./Services.page.module.css";

interface IProps {
  name?: string;
}

const ServicesPage: React.FunctionComponent<IProps> = ({ name }) => {
  return <div className={styles.container}>Services Page</div>;
};

export default ServicesPage;
