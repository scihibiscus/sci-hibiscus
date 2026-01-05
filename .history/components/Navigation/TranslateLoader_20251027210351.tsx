import React from "react";
import AnimatedPhrase from "@/utils/AnimatedPhrase";
import { loaderAnim } from "@/animations";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Navigation/translateloader.module.scss";

const TranslateLoader = ({
  localState,
  animFinished,
  setAnimFinished,
}: {
  localState: string;
  animFinished: boolean;
  setAnimFinished: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();

  return (
    <motion.div className={styles.translateloader}    variants={loaderAnim}
    animate={localState === "Translating State" && !animFinished  ? "entry" : "initial"}
    exit="exit">
      <div className={styles.content}>
        <AnimatedPhrase
          phrase={t("Navigation:translating")}
          setAnimFinished={setAnimFinished}
        />
      </div>
    </motion.div>
  );
};

export default TranslateLoader;
