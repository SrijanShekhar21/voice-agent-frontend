// src/components/AnimatedMicButton.js
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "./AnimatedMicButton.css"; // We will create this CSS file next

const AnimatedMicButton = ({ onClick }) => {
  return (
    // We replace the standard <button> with <motion.button>
    // This unlocks all the animation props from framer-motion.
    <motion.button
      className="animated-mic-button"
      onClick={onClick}
      // Animation for HOVER state
      whileHover={{ scale: 1.1 }}
      // Animation for CLICK/TAP state
      whileTap={{ scale: 0.9 }}
      // Initial animation transition for the button itself
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Element 1: The continuous pulsing animation BEHIND the mic */}
      <motion.div
        className="pulse"
        animate={{
          scale: [1, 1.5, 1], // It will scale up and then back down
          opacity: [0.5, 0, 0.5], // It will fade out as it expands
        }}
        transition={{
          duration: 2,
          repeat: Infinity, // Loop the animation forever
          ease: "easeInOut",
        }}
      />

      {/* Element 2: The microphone icon itself */}
      <FontAwesomeIcon icon={faMicrophone} className="mic-icon" />
    </motion.button>
  );
};

export default AnimatedMicButton;