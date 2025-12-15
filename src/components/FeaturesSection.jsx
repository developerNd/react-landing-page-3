import React, { useState, useEffect } from "react";

function FeaturesSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      icon: "🎙️",
      bgColor: "#6366f1",
      title: "Human-like delivery",
      description:
        "Pauses, stammers, breaths, emotion, accents—tuned to your market.",
    },
    {
      icon: "⚡",
      bgColor: "#10b981",
      title: "Fast, real-time brains",
      description:
        "Sub-300ms latency with interruptions, memory, and intent routing.",
    },
    {
      icon: "🧠",
      bgColor: "#c026d3",
      title: "Agent skills",
      description:
        "Book slots, collect KYC, send OTPs, take payments, update tickets.",
    },
    {
      icon: "🔗",
      bgColor: "#0ea5e9",
      title: "CRM & telephony",
      description:
        "HubSpot, Zoho, Salesforce; SIP, Twilio, Plivo, and Vapi compatible.",
    },
    {
      icon: "📝",
      bgColor: "#f59e0b",
      title: "Auto notes & summaries",
      description:
        "Structured notes, tags and key outcomes - pushed instantly for a perfect record in CRM",
    },
    {
      icon: "🛡️",
      bgColor: "#f43f5e",
      title: "Compliance & controls",
      description:
        "DNC checks, consent, redaction, guardrails, audit logs to ensure compliance",
    },
  ];

  // Determine grid columns based on screen size
  const getGridColumns = () => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .features-section * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .feature-card {
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        /* Better approach: use CSS media queries for responsiveness */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .features-title {
          font-size: 1.875rem;
          font-weight: 800;
          line-height: 1.2;
          color: #111827;
        }

        @media (min-width: 768px) {
          .features-title {
            font-size: 2.25rem;
          }
        }
      `}</style>

      <section
        id="features"
        className="features-section"
        style={{
          padding: "4rem 0 6rem",
          backgroundColor: "#F9FAFB",
        }}
      >
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}
        >
          {/* Header */}
          <div
            style={{ textAlign: "center", maxWidth: "42rem", margin: "0 auto" }}
          >
            <h2 className="features-title">
              Everything your voice team wishes for
            </h2>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#374151",
                fontSize: "1rem",
                lineHeight: "1.625",
              }}
            >
              Drop-in voice agents with human quirks—emotions, fillers,
              accents—plus tooling for pipeline and support.
            </p>
          </div>

          {/* Features Grid */}
          <div className="features-grid" style={{ marginTop: "2.5rem" }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  backgroundColor: "white",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                }}
              >
                <div
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    borderRadius: "0.75rem",
                    backgroundColor: feature.bgColor,
                    color: "white",
                    display: "grid",
                    placeContent: "center",
                    fontSize: "1.25rem",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    marginTop: "1rem",
                    fontWeight: "600",
                    fontSize: "1.125rem",
                    color: "#111827",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#374151",
                    lineHeight: "1.5",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
