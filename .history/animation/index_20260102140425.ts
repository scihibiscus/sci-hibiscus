import { Variants } from "framer-motion";

export const ModalAnim: Variants = {
  initial: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};


export const SideBarAnim: Variants = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};
