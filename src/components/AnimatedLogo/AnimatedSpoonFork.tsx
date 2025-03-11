import React from "react";
import { motion } from "framer-motion";

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

const AnimatedSpoonFork: React.FC = () => {
  return (
    <motion.svg
      className="mx-auto animated"
      width="60"
      height="60"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fork Group */}
      {/* Fork handle from y=30 to y=80 */}
      <motion.path
        d="M20 30 L20 80"
        stroke="#FFF"
        strokeWidth="3"
        fill="transparent"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
      {/* Fork tine 1 from y=10 to y=30 */}
      <motion.path
        d="M15 10 L15 30"
        stroke="#FFF"
        strokeWidth="3"
        fill="transparent"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      />
      {/* Fork tine 2 from y=10 to y=30 */}
      <motion.path
        d="M20 10 L20 30"
        stroke="#FFF"
        strokeWidth="3"
        fill="transparent"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
      />
      {/* Fork tine 3 from y=10 to y=30 */}
      <motion.path
        d="M25 10 L25 30"
        stroke="#FFF"
        strokeWidth="3"
        fill="transparent"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
      />

      {/* Spoon Group */}
      {/* Spoon bowl: new coordinates so that the bowl spans from y=10 to y=40 */}
      <motion.path
        d="M70 10 Q85 25 70 40 Q55 25 70 10"
        stroke="#FFF"
        strokeWidth="3"
        fill="transparent"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.0 }}
      />
      {/* Spoon handle from y=40 to y=80 */}
      <motion.path
        d="M70 40 L70 80"
        stroke="#FFF"
        strokeWidth="3"
        fill="transparent"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeInOut", delay: 1.4 }}
      />
    </motion.svg>
  );
};

export default AnimatedSpoonFork;
