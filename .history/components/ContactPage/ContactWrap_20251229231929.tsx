import React from "react";
import styles from "../../styles/ContactPage/contactsection.module.scss"

interface DataInterface {
  head: string;
  link?: string;
  head1: string;
  text: string;
}

const ContactWrap = ({ data }: { data: DataInterface }) => {
  return <div className={styles.con__wrap}>
    
  </div>;
};

export default ContactWrap;
