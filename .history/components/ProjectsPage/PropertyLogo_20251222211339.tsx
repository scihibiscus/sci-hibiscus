import React from "react";
import styles from "../../styles/ProjectsPage/propertylogo.module.scss";


interface StatProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}


const PropertyLogo = ({
  data
}: {
  data
}) => {
  return (
    <div className={`section ${styles.pl__section}`}>
      <div className={`container ${styles.pl__container}`}>
        <div className={styles.pl__wrapper}>

        </div>
      </div>
    </div>
  );
};

export default PropertyLogo;
