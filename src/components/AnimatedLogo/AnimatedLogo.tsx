import React from "react";
import { motion } from "framer-motion";

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

const AnimatedLogo: React.FC = () => {
  return (
    <motion.svg
      className="mx-auto"
      width="60"
      height="60"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <motion.path
        d="M50,10 a40,40 0 1,0 0,80 a40,40 0 1,0 0,-80"
        stroke="#FFF"
        strokeWidth="3"
        fill="transparent"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      />
      {/* Diagonal from top-left to bottom-right */}
      <motion.path
        d="M30,30 L70,70"
        stroke="#FFF"
        strokeWidth="3"
        fill="transparent"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
      />
      {/* Diagonal from top-right to bottom-left */}
      <motion.path
        d="M70,30 L30,70"
        stroke="#FFF"
        strokeWidth="3"
        fill="transparent"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.0 }}
      />
      {/* Horizontal line in the middle */}
      <motion.path
        d="M30,50 L70,50"
        stroke="#FFF"
        strokeWidth="3"
        fill="transparent"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.0, ease: "easeInOut", delay: 1.2 }}
      />
    </motion.svg>
  );
};

export default AnimatedLogo;
