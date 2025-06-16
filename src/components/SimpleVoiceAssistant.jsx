import {
  useVoiceAssistant,
  BarVisualizer,
  VoiceAssistantControlBar,
  useTrackTranscription,
  useLocalParticipant,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useState, useRef } from "react"; // <--- 1. Import useRef
import "./SimpleVoiceAssistant.css";

const Message = ({ type, text }) => {
  return (
    <div className="message">
      <strong className={`message-${type}`}>
        {type === "agent" ? "Agent: " : "You: "}
      </strong>
      <span className="message-text">{text}</span>
    </div>
  );
};

const SimpleVoiceAssistant = () => {
  const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
  const localParticipant = useLocalParticipant();
  const { segments: userTranscriptions } = useTrackTranscription({
    publication: localParticipant.microphoneTrack,
    source: Track.Source.Microphone,
    participant: localParticipant.localParticipant,
  });

  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null); // <--- 2. Create the ref

  useEffect(() => {
    const allMessages = [
      ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
      ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
    ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);

    setMessages(allMessages);
  }, [agentTranscriptions, userTranscriptions]);

  // <--- 4. Add the auto-scrolling effect
  useEffect(() => {
    // Check if the ref is attached to an element
    if (chatContainerRef.current) {
      const element = chatContainerRef.current;
      // Set the scroll position to the total height of the content
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]); // This effect runs every time the messages array changes

  return (
    <div className="voice-assistant-container">
      <div className="visualizer-container">
        <div className="visualizer">
          <BarVisualizer state={state} barCount={7} trackRef={audioTrack} />
        </div>
      </div>
      <div className="control-section">
        <VoiceAssistantControlBar />
        {messages.length > 0 ? (
          // <--- 3. Attach the ref to the conversation div
          <div className="conversation" ref={chatContainerRef}>
            {messages.map((msg, index) => (
              <Message key={msg.id || index} type={msg.type} text={msg.text} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SimpleVoiceAssistant;
