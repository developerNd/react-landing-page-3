import { useState, useEffect } from "react";

function HeroSection({ openModal }) {
  const [callStatus, setCallStatus] = useState(
    "Click to start a web call with our AI agent"
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Set initial values
    const checkSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const handleCallClick = () => {
    setCallStatus("Connecting...");
    // Add your call functionality here
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .hero-section * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .hero-section {
          position: relative;
          overflow: hidden;
        }
        
        .hero-gradient-text {
          background: linear-gradient(to right, #4f46e5, #c026d3, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-primary {
          transition: all 0.2s ease;
        }
        
        .btn-primary:hover {
          background-color: #4f46e5;
          transform: translateY(-1px);
        }
        
        .btn-secondary {
          transition: all 0.2s ease;
        }
        
        .btn-secondary:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .phone-button {
          transition: all 0.2s ease;
        }
        
        .phone-button:hover {
          background-color: #171717;
        }
        
        .console-button {
          transition: all 0.2s ease;
        }
        
        .console-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .console-conversation {
          font-family: Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace !important;
          font-weight: 400;
        }
        
        @media (max-width: 768px) {
          .hero-section > div > div {
            flex-direction: column !important;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Ambient gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: "-7rem",
            left: "-10rem",
            height: "420px",
            width: "420px",
            borderRadius: "9999px",
            filter: "blur(75px)",
            opacity: 0.2,
            pointerEvents: "none",
            background:
              "radial-gradient(closest-side, rgba(99, 102, 241, 0.35), transparent 65%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            right: "-8rem",
            top: "6rem",
            height: "420px",
            width: "420px",
            borderRadius: "9999px",
            filter: "blur(75px)",
            opacity: 0.2,
            pointerEvents: "none",
            background:
              "radial-gradient(closest-side, rgba(236, 72, 153, 0.28), transparent 65%)",
          }}
        ></div>

        <div
          style={{
            width: "100%",
            paddingLeft: "clamp(1rem, 5vw, 4rem)",
            paddingRight: "clamp(1rem, 5vw, 4rem)",
            paddingTop: "clamp(3rem, 8vw, 6rem)",
            paddingBottom: isMobile ? "16rem" : "16rem",
          }}
        >
          <div
            style={{
              maxWidth: "1600px",
              display: "flex",
              flexDirection: isTablet ? "column" : "row",
              gap: "2.5rem",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            {/* Left: Copy */}
            <div
              style={{
                flex: "1",
                maxWidth: isTablet ? "100%" : "700px",
                textAlign: "left",
              }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2"
                style={{
                  borderRadius: "9999px",
                  backgroundColor: "white",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.75rem",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    height: "0.5rem",
                    width: "0.5rem",
                    borderRadius: "9999px",
                    backgroundColor: "#10b981",
                  }}
                ></span>
                Live in production • 24/7 AI voice agents
              </div>

              {/* Main Heading */}
              <h1
                style={{
                  marginTop: "1rem",
                  fontSize: "clamp(2.25rem, 4.5vw, 2.75rem)",
                  fontWeight: "800",
                  lineHeight: "1.2",
                  letterSpacing: "-0.025em",
                }}
              >
                Never miss a lead. Book more showings.{" "}
                <span className="hero-gradient-text">AI calls that close</span>
              </h1>

              {/* Description */}
              <p
                style={{
                  marginTop: "1rem",
                  maxWidth: "36rem",
                  color: "#374151",
                  fontSize: "1rem",
                  lineHeight: "1.625",
                }}
              >
                Our voice AI answers property inquiries and instantly calls your
                new leads—with a natural, human-like voice. Plug into your real
                estate CRM and start booking qualified showings today, with
                pricing from just ₹6 per minute.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-3"
                style={{ marginTop: "1.5rem" }}
              >
                <button
                  onClick={openModal}
                  className="btn-primary"
                  style={{
                    padding: "0.75rem 1.25rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#6366f1",
                    color: "white",
                    fontWeight: "600",
                    boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.25)",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Book Appointment
                </button>
                <a
                  href="#cta"
                  className="btn-secondary"
                  style={{
                    padding: "0.75rem 1.25rem",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    textDecoration: "none",
                    color: "inherit",
                    display: "inline-block",
                  }}
                >
                  Hear a property call
                </a>
              </div>
            </div>

            {/* Right: Phone + Console */}
            <div
              className="relative"
              style={{
                flex: "0 0 auto",
                width: "100%",
                maxWidth: isMobile ? "90%" : isTablet ? "480px" : "440px",
                marginRight: isMobile ? "auto" : isTablet ? "auto" : "6rem",
                marginLeft: "auto",
                marginTop: isTablet ? "2rem" : "3rem",
                position: "relative",
              }}
            >
              {/* Rose glow effect - NOW ON LEFT SIDE from screen edge to phone */}
              <div
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "-80%",
                  width: "100%",
                  height: "90%",
                  background:
                    "radial-gradient(ellipse 120% 100% at 120% 50%, rgba(236, 72, 153, 0.25) 0%, rgba(236, 72, 153, 0.15) 30%, rgba(236, 72, 153, 0.08) 50%, transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                  zIndex: -1,
                }}
              ></div>

              {/* Phone Frame */}
              <div
                className="relative mx-auto"
                style={{
                  width: isMobile
                    ? "min(340px, 90vw)"
                    : isTablet
                    ? "380px"
                    : "360px",
                  filter: "drop-shadow(0 10px 30px rgba(236, 72, 153, 0.12))",
                }}
              >
                <div
                  style={{
                    borderRadius: "2.2rem",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    backgroundColor: "rgba(23, 23, 23, 0.9)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                    padding: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "1.9rem",
                      overflow: "hidden",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    {/* Notch/Status Bar */}
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          left: "50%",
                          transform: "translateX(-50%)",
                          top: "0.5rem",
                          height: "1.25rem",
                          width: "7rem",
                          borderRadius: "9999px",
                          backgroundColor: "#171717",
                        }}
                      ></div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.75rem 1rem 0.5rem",
                          fontSize: "0.688rem",
                          color: "#525252",
                        }}
                      >
                        <span style={{ fontWeight: "500" }}>12:15 PM</span>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.375rem",
                          }}
                        >
                          <div
                            style={{
                              height: "0.75rem",
                              width: "1.5rem",
                              borderRadius: "0.125rem",
                              border: "1px solid #525252",
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                right: "-0.25rem",
                                top: "50%",
                                transform: "translateY(-50%)",
                                height: "0.375rem",
                                width: "3px",
                                borderRadius: "0 0.125rem 0.125rem 0",
                                backgroundColor: "#525252",
                              }}
                            ></div>
                            <div
                              style={{
                                height: "100%",
                                width: "70%",
                                backgroundColor: "#525252",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div
                      style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "rgba(229, 229, 229, 0.7)",
                        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                        }}
                      >
                        <div
                          style={{
                            height: "2rem",
                            width: "2rem",
                            borderRadius: "0.75rem",
                            backgroundColor: "black",
                            color: "white",
                            display: "grid",
                            placeContent: "center",
                            fontSize: "0.75rem",
                            fontWeight: "700",
                          }}
                        >
                          CM
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              fontSize: "0.813rem",
                              fontWeight: "600",
                              color: "#171717",
                            }}
                          >
                            Call Mira's AI
                          </div>
                          <div
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              fontSize: "0.688rem",
                              color: "#525252",
                            }}
                          >
                            Make your customers happy!
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone Content */}
                    <div
                      style={{
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                      }}
                    >
                      <button
                        onClick={handleCallClick}
                        className="phone-button"
                        style={{
                          width: "100%",
                          padding: "1rem",
                          marginBottom: "0.25rem",
                          borderRadius: "0.75rem",
                          fontWeight: "500",
                          backgroundColor: "#171717",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Let's Talk
                      </button>
                      <p
                        style={{
                          fontSize: "0.625rem",
                          color: "#a3a3a3",
                        }}
                      >
                        {callStatus}
                      </p>
                    </div>

                    {/* Home Indicator */}
                    <div style={{ padding: "0 0 0.75rem" }}>
                      <div
                        style={{
                          margin: "0 auto",
                          height: "0.375rem",
                          width: "5rem",
                          borderRadius: "9999px",
                          backgroundColor: "#d4d4d4",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Console Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: isMobile
                    ? "translate(-50%, 79%)"
                    : "translate(-50%, 79%)",
                  width: isMobile
                    ? "min(95vw, 400px)"
                    : isTablet
                    ? "105%"
                    : "105%",
                  maxWidth: isTablet ? "420px" : "none",
                  marginRight: isTablet ? "0" : "1.5rem",
                }}
              >
                <div
                  style={{
                    borderRadius: "0.75rem",
                    backgroundColor: "#171717",
                    color: "#e5e5e5",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      padding: isMobile ? "0.75rem 1rem" : "0.75rem 1.25rem",
                      fontSize: isMobile ? "0.688rem" : "0.688rem",
                      color: "rgba(52, 211, 153, 0.9)",
                      textAlign: "left",
                    }}
                  >
                    Agent{" "}
                    <span style={{ color: "#34d399", fontWeight: "500" }}>
                      Mira
                    </span>{" "}
                    • Real Estate Lead
                  </div>
                  <div
                    className="console-conversation"
                    style={{
                      padding: isMobile ? "0 1rem 1rem" : "0 1.25rem 1rem",
                      fontSize: isMobile ? "0.75rem" : "0.75rem",
                      fontFamily:
                        'Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace',
                      fontWeight: "400",
                      lineHeight: "1.8",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        lineHeight: "1.8",
                        fontFamily:
                          'Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace',
                        fontWeight: "400",
                      }}
                    >
                      <span style={{ color: "#34d399" }}>Agent:</span> Hi! You
                      showed interest online in the property on Main Street. Is
                      now a good time to chat?
                    </div>
                    <div
                      style={{
                        marginTop: "0.625rem",
                        lineHeight: "1.8",
                        fontFamily:
                          'Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace',
                        fontWeight: "400",
                      }}
                    >
                      <span style={{ color: "#38bdf8" }}>Lead:</span> Sure. Is
                      it still available?
                    </div>
                    <div
                      style={{
                        marginTop: "0.625rem",
                        lineHeight: "1.8",
                        fontFamily:
                          'Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace',
                        fontWeight: "400",
                      }}
                    >
                      <span style={{ color: "#34d399" }}>Agent:</span> Yes, it
                      is. To help, are you already working with an agent or have
                      a pre-approval?
                    </div>
                    <div
                      style={{
                        marginTop: "0.625rem",
                        lineHeight: "1.8",
                        fontFamily:
                          'Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace',
                        fontWeight: "400",
                      }}
                    >
                      <span style={{ color: "#38bdf8" }}>Lead:</span> I have a
                      pre-approval already.
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: isMobile ? "0.75rem 1rem" : "0.75rem 1.25rem",
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: isMobile ? "0.625rem" : "0.75rem",
                    }}
                  >
                    <button
                      onClick={() =>
                        document
                          .getElementById("cta")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="console-button"
                      style={{
                        padding: "0.625rem 0.75rem",
                        borderRadius: "0.5rem",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "white",
                        fontSize: isMobile ? "0.813rem" : "0.875rem",
                        cursor: "pointer",
                      }}
                    >
                      Book demo
                    </button>
                    <button
                      onClick={() =>
                        document
                          .getElementById("demo")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="console-button"
                      style={{
                        padding: "0.625rem 0.75rem",
                        borderRadius: "0.5rem",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "white",
                        fontSize: isMobile ? "0.813rem" : "0.875rem",
                        cursor: "pointer",
                      }}
                    >
                      Transcript
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    margin: "0.75rem auto 0",
                    height: "0.75rem",
                    width: "80%",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    filter: "blur(4px)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;