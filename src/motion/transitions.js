import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const childVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const MoveToLeft = ({ children }) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default MoveToLeft;
