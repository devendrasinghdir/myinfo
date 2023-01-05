import React from "react";
import styles from "./Careers.page.module.css";

interface IProps {
  name?: string;
}

const CareersPage: React.FunctionComponent<IProps> = ({ name }) => {
  return <div className={styles.container}>Careers Page</div>;
};

export default CareersPage;
