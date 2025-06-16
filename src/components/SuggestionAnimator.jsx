// src/components/SuggestionAnimator.js

import React, { useState, useEffect } from "react";
import "./SuggestionAnimator.css"; // We will create this CSS file next

const SuggestionAnimator = ({ suggestions, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
        setIsVisible(true);
      }, 500); // This duration should match the CSS transition time
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [suggestions, interval]);

  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <div className="suggestion-container">
      <p className={`suggestion-text ${isVisible ? "visible" : ""}`}>
        Try asking: "{suggestions[currentIndex]}"
      </p>
    </div>
  );
};

export default SuggestionAnimator;
