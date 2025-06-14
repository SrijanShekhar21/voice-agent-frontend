import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
import "@livekit/components-styles";
import SimpleVoiceAssistant from "./SimpleVoiceAssistant";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <h3>Connecting to our Agent...</h3>
    </div>
  );
};

const LiveKitModal = ({ setTalkingToAgent }) => {
  const name = "demo-voice-agent";
  const [token, setToken] = useState(null);

  const getToken = useCallback(async (userName) => {
    try {
      const response = await fetch(
        `/api/getToken?name=${encodeURIComponent(userName)}`
      );
      const token = await response.text();
      console.log("token: ", token);
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (name.trim()) {
      getToken(name);
    }
  }, []);

  return (
    <div className="d1">
      {token ? (
        <LiveKitRoom
          serverUrl={import.meta.env.VITE_LIVEKIT_URL}
          token={token}
          connect={true}
          video={false}
          audio={true}
          onDisconnected={() => {
            setTalkingToAgent(false);
          }}
        >
          <RoomAudioRenderer />
          <SimpleVoiceAssistant />
        </LiveKitRoom>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default LiveKitModal;
