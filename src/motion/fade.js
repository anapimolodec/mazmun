import { motion } from "framer-motion";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const Fade = ({ children }) => {
  return (
    <motion.div
      initial={animationConfiguration.initial}
      animate={animationConfiguration.animate}
      exit={animationConfiguration.exit}
      transition={animationConfiguration.transition}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
