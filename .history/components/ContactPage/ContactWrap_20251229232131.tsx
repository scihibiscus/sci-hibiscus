import React from "react";
import Link from "next/link";
import styles from "../../styles/ContactPage/contactsection.module.scss"


interface DataInterface {
  head: string;
  link?: string;
  head1: string;
  text: string;
}

const ContactWrap = ({ data }: { data: DataInterface }) => {
  return <div className={styles.con__wrap}>
    <span className={styles.cw__head}>{data.head}</span>
    <div className={styles.cw__bottom}>
      {
        data.link ? <Link href={data.link}className="">{data.head1}</Link> : <spanclassName="">{data.head1}</span>
      }
    </div>
  </div>;
};

export default ContactWrap;
