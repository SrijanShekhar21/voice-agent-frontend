import React, { useState } from "react";
import "./App.css";
import LiveKitModal from "./components/LiveKitModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import SuggestionAnimator from "./components/SuggestionAnimator";
import AnimatedMicButton from "./components/AnimatedMicButton";

const App = () => {
  const [talkingToAgent, setTalkingToAgent] = useState(false);

  const demoSuggestions = [
    "Where is my order?",
    "Can I return an item?",
    "Do you have the 'Motorola G15' in stock?",
    "What is your return policy?",
    "I need to speak to a human.",
  ];

  const handleSupportClick = () => {
    // setShowSupport(true);
    setTalkingToAgent(true);
  };

  return (
    <div className="app">
      <div className="landing-page">
        <header className="header">
          <Navbar />
        </header>
        <section className="hero-section">
          {!talkingToAgent ? (
            <>
              {/* <button className="support-button" onClick={handleSupportClick}>
                <FontAwesomeIcon icon={faMicrophone} />
              </button> */}
              <AnimatedMicButton onClick={handleSupportClick} />
              <p className="hero-content">Talk to our Smart AI Agent</p>
              <SuggestionAnimator
                suggestions={demoSuggestions}
                interval={3000}
              />
            </>
          ) : (
            <LiveKitModal setTalkingToAgent={setTalkingToAgent} />
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
