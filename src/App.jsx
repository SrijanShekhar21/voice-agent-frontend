import React, { useState } from "react";
import "./App.css";
import LiveKitModal from "./components/LiveKitModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [talkingToAgent, setTalkingToAgent] = useState(false);

  const handleSupportClick = () => {
    // setShowSupport(true);
    setTalkingToAgent(true);
  };

  return (
    <div className="app">
      <div className="landing-page">
        <header className="header">
          <div className="logo">AI Voice Assistant</div>
        </header>
        <section className="hero-section">
          {!talkingToAgent ? (
            <button className="support-button" onClick={handleSupportClick}>
              <FontAwesomeIcon icon={faMicrophone} />
            </button>
          ) : (
            <LiveKitModal setTalkingToAgent={setTalkingToAgent} />
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
