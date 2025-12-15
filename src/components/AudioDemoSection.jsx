import React, { useState } from "react";

function AudioDemoSection() {
  const [showTranscript, setShowTranscript] = useState(false);

  const toggleTranscript = () => {
    setShowTranscript(!showTranscript);
  };

  const handlePlayAudio = () => {
    const audio = document.getElementById("demoAudio");
    if (audio) {
      audio.play();
    }
  };

  const transcript = [
    {
      type: "receiver",
      text: "Hi. This is Shania from 6 2 6 2 Fitness. You'd recently shown interest in our online fitness programs, and I just wanted to connect and help you get started. Do you have a minute to chat?",
      time: "2:23:27 PM",
    },
    { type: "sender", text: "Yes. I do.", time: "2:23:38 PM" },
    {
      type: "receiver",
      text: "Great. I appreciate your time. Let's dive right in. What made you interested in joining a fitness program right now?",
      time: "2:23:40 PM",
    },
    {
      type: "sender",
      text: "I'm looking for a weight loss.",
      time: "2:23:47 PM",
    },
    {
      type: "receiver",
      text: "Got it. Weight weight loss is a great goal, and it's something many of our members have successfully achieved. Uh, where are go where are you currently based? Uh, we have options for online workout classes that might be just what you need.",
      time: "2:23:50 PM",
    },
    { type: "sender", text: "Uh, that sound good. So", time: "2:24:07 PM" },
    {
      type: "receiver",
      text: "Our online program could be a great fit for your weight loss goals. This especially with the flexibility it offers. Have you done any structured workouts before, like, personal training or group fitness classes?",
      time: "2:24:11 PM",
    },
    { type: "sender", text: "Not yet.", time: "2:24:24 PM" },
    {
      type: "receiver",
      text: "That's totally fine. Everyone starts somewhere. Our program is very beginner friendly, and we guide you through everything step by step. How many days a week are you ideally looking to work out?",
      time: "2:24:26 PM",
    },
    { type: "sender", text: "8 2 4.", time: "2:24:38 PM" },
    {
      type: "receiver",
      text: "Around 2 to 4 days a week. Sounds completely doable and flexible. We can definitely tailor a program that our accommodates that frequency. Would you be interested in guidance around nutrition as well or just workouts for now?",
      time: "2:24:41 PM",
    },
    {
      type: "sender",
      text: "Look. Uh, just mute. Just just work out.",
      time: "2:24:55 PM",
    },
    {
      type: "receiver",
      text: "Alright. Focusing on just workouts is perfect. We can craft a plan tailored specifically for that. Just to ensure we're on the same page, what kind of budget do you have in mind for a fitness program?",
      time: "2:24:59 PM",
    },
    { type: "sender", text: "1000.", time: "2:25:13 PM" },
    {
      type: "receiver",
      text: "Thanks for sharing that. I understand budget is an essential factor, and I want to make sure you're aware that our, uh, 45 day transformation program is priced at address 5 5 0 0 This is the best value in the market considering the comprehensive support it offers, live Zoom sessions, nutrition guidance, and continuous coaching. It's designed to provide amazing results quickly and has been craft by experts. Many of our members achieve significant transformations in just 45 days, like weight loss, toning, and more. Let me know if there are any particular aspects you'd like to explore or discuss further.",
      time: "2:25:16 PM",
    },
    {
      type: "sender",
      text: "Is there any way we can reduce the cost?",
      time: "2:25:50 PM",
    },
    {
      type: "receiver",
      text: "Um, I completely understand where you're coming from. But the price of RS 5 5 0 honestly reflects the level of support and tailored approach we offer. It's tough to match the expertise, live coaching, and results driven structure anywhere else in this range. Uh, what sets us apart is that you get guided workouts where a coach watches your posture and technique live, plus personalized nutrition insights It's not just a workout program. It's a transformation journey. If you're still unsure let me know your thoughts. I'm happy to address any concerns or walk you through how we can make this worthwhile for you.",
      time: "2:25:55 PM",
    },
    {
      type: "sender",
      text: "It's going to be my wedding next week. So I'm on a budget.",
      time: "2:26:39 PM",
    },
    {
      type: "receiver",
      text: "Oh, congratulations on your upcoming wedding. That's such an exciting time, and being on a budget makes perfect sense right now. Uh, given your timeline and priorities, you might be looking for something less comprehensive at this moment. Uh, our programs are usually geared towards, uh, committed transformations over a longer span. However, if things change and you're ready for, uh, structured results in the future, we'd love to help. Thanks for sharing your situation. Is there anything else we could support you with as you prepare for your big day?",
      time: "",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .audio-demo-section * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .demo-button {
          transition: all 0.2s ease;
        }
        
        .demo-button:hover {
          transform: translateY(-1px);
        }
        
        .demo-button-primary {
          background-color: #6366f1;
          color: white;
        }
        
        .demo-button-primary:hover {
          background-color: #4f46e5;
        }
        
        .demo-button-secondary {
          background-color: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #111827;
        }
        
        .demo-button-secondary:hover {
          background-color: rgba(0, 0, 0, 0.02);
        }
        
        .transcript-panel {
          max-height: 25vh;
          overflow-y: auto;
        }
        
        .transcript-panel::-webkit-scrollbar {
          width: 6px;
        }
        
        .transcript-panel::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .transcript-panel::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 3px;
        }
        
        .message-receiver {
          max-width: 70%;
          background-color: #e5e7eb;
          color: #111827;
          margin-right: auto;
          border-radius: 0.5rem;
          border-top-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
        
        .message-sender {
          max-width: 70%;
          background-color: #6366f1;
          color: white;
          margin-left: auto;
          border-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
        }
        
        .demo-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: start;
        }
        
        @media (min-width: 768px) {
          .demo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <section
        id="demo"
        className="audio-demo-section"
        style={{
          padding: "4rem 0 5rem",
          backgroundColor: "#F9FAFB",
        }}
      >
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            style={{
              borderRadius: "1rem",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              padding: "1.5rem",
            }}
          >
            <div className="demo-grid">
              {/* Left: Content */}
              <div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#111827",
                    lineHeight: "1.3",
                  }}
                >
                  Hear Our AI Qualify a Real Estate Lead
                </h3>
                <p
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.875rem",
                    color: "#374151",
                    lineHeight: "1.5",
                  }}
                >
                  Listen to a real call with a buyer lead and see how our AI
                  handles the conversation.
                </p>

                {/* Buttons */}
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  <button
                    onClick={handlePlayAudio}
                    className="demo-button demo-button-primary"
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "0.75rem",
                      fontWeight: "600",
                      fontSize: "0.875rem",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Play Buyer Call
                  </button>
                  <button
                    onClick={toggleTranscript}
                    className="demo-button demo-button-secondary"
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "0.75rem",
                      fontWeight: "500",
                      fontSize: "0.875rem",
                      cursor: "pointer",
                    }}
                  >
                    {showTranscript ? "Hide transcript" : "Show transcript"}
                  </button>
                </div>
              </div>

              {/* Right: Audio Player OR Transcript */}
              <div>
                {!showTranscript ? (
                  /* Audio Player */
                  <audio
                    id="demoAudio"
                    controls
                    style={{
                      width: "100%",
                      borderRadius: "0.5rem",
                      border: "none",
                    }}
                    src="/assets/audio/realestate.wav"
                  >
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  /* Transcript Panel */
                  <div
                    className="transcript-panel"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "0.5rem",
                      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                        color: "#111827",
                      }}
                    >
                      Transcript
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {transcript.map((message, index) => (
                        <div
                          key={index}
                          className={
                            message.type === "receiver"
                              ? "message-receiver"
                              : "message-sender"
                          }
                          style={{ padding: "1rem", position: "relative" }}
                        >
                          <div
                            style={{
                              fontSize: "0.875rem",
                              whiteSpace: "normal",
                            }}
                          >
                            {message.text}
                          </div>
                          {message.time && (
                            <div
                              style={{
                                fontSize: "0.75rem",
                                marginTop: "0.25rem",
                                opacity:
                                  message.type === "receiver" ? 0.7 : 0.9,
                              }}
                            >
                              {message.time}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AudioDemoSection;
