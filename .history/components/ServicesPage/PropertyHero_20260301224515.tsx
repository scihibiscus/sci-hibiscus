import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/image11.jpg";
import styles from "../../styles/RentBuyPage/propertyhero.module.scss";

const PropertyHero = () => {
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-120);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-60);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-90);
      } else {
        setTransform(-120);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  return (
    <div className={styles.ph__section}>
      <div className={styles.hero__image}>
        <motion.div className={styles.h__image} style={{ y }}>
          <Image
            fill
            quality={100}
            src={image}
            alt="Sci Hibiscus"
            placeholder="blur"
          />
        </motion.div>
        <div className={styles.hero__gradient}></div>
      </div>
    </div>
  );
};

export default PropertyHero;
