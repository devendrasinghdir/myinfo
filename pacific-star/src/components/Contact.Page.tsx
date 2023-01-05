import React from "react";
import styles from "./Contact.page.module.css";

interface IProps {
  name?: string;
}

const ContactPage: React.FunctionComponent<IProps> = ({ name }) => {
  return <div className={styles.container}>Contact Page</div>;
};

export default ContactPage;
