import { motion } from "framer-motion";

const animationConfiguration = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.75, ease: "easeInOut" },
};

const MoveToLeft = ({ children }) => {
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

export default MoveToLeft;
