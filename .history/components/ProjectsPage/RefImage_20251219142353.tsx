import React from "react";

const RefImage = () => {
  return (
    <div className={styles.rb__right} ref={container}>
      <motion.div className={styles.rbr__image} style={{ y }}>
        <Image
          fill
          quality={100}
          alt={data.name}
          src={data.image}
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
};

export default RefImage;
