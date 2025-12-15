import React from "react";

function PricingSection() {
  const features = [
    {
      name: "Unlimited Listings & Leads",
      color: "#818CF8",
      bgHover: "rgba(238, 242, 255, 0.5)",
      bgDefault: "transparent",
    },
    {
      name: "Real Estate CRM Sync",
      color: "#E879F9",
      bgHover: "rgba(253, 244, 255, 0.5)",
      bgDefault: "transparent",
    },
    {
      name: "Automated Call Notes",
      color: "#fbbf24",
      bgHover: "#FFFBEB",
      bgDefault: "#f7f5ec",
    },
    {
      name: "Guided Onboarding",
      color: "#fb7185",
      bgHover: "rgba(255, 241, 242, 0.6)",
      bgDefault: "transparent",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .pricing-section * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .feature-item {
          transition: all 0.2s ease;
        }
        
        .gradient-border {
          background: linear-gradient(135deg, #c7d2fe, #f5d0fe, #fde68a);
          padding: 1px;
          border-radius: 1.75rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .gradient-text {
          background: linear-gradient(to right, #6366f1, #c026d3, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-button {
          background: linear-gradient(to right, #6366f1, #c026d3, #f59e0b);
          transition: all 0.2s ease;
        }
        
        .gradient-button:hover {
          opacity: 0.95;
        }
        
        .gradient-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(192, 38, 211, 0.3);
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          overflow: hidden;
        }
        
        @media (min-width: 768px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <section
        id="pricing"
        className="pricing-section"
        style={{
          padding: "4rem 0",
          backgroundColor: "#F9FAFB",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            className="gradient-border"
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
            }}
          >
            <div
              className="pricing-grid"
              style={{
                borderRadius: "1.688rem",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Left: Features */}
              <div
                style={{
                  padding: "2rem",
                  borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  background:
                    "linear-gradient(to bottom, white, rgba(224, 231, 255, 0.2))",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Features
                </h3>
                <ul style={{ marginTop: "1rem" }}>
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="feature-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.60rem 0",
                        borderTop:
                          index > 0 ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
                        fontSize: "0.875rem",
                        color: "#1f2937",
                        cursor: "pointer",
                        backgroundColor: feature.bgDefault,
                        borderRadius: "0",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = feature.bgHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          feature.bgDefault;
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            height: "0.6rem",
                            width: "0.6rem",
                            borderRadius: "50%",
                            backgroundColor: feature.color,
                          }}
                        ></span>
                        {feature.name}
                      </span>
                      <span style={{ color: "#10b981", fontSize: "1rem" }}>
                        ✔
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Pricing */}
              <div
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(250, 232, 255, 0.4))",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Pricing
                </h3>
                <p
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.875rem",
                    color: "#6b7280",
                  }}
                >
                  Starting from
                </p>
                <div style={{ marginTop: "0.5rem" }}>
                  <span
                    className="gradient-text"
                    style={{
                      fontSize: "3rem",
                      fontWeight: "800",
                      lineHeight: "1",
                    }}
                  >
                    ₹6
                  </span>
                  <span style={{ color: "#6b7280", fontSize: "1.125rem" }}>
                    {" "}
                    per
                  </span>
                  <div
                    style={{
                      fontSize: "1.875rem",
                      fontWeight: "800",
                      marginTop: "-0.25rem",
                      color: "#111827",
                    }}
                  >
                    minute
                  </div>
                </div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.875rem",
                    color: "#6b7280",
                  }}
                >
                  depending on voice quality
                </p>
                <a
                  href="#cta"
                  className="gradient-button"
                  style={{
                    marginTop: "2rem",
                    display: "inline-flex",
                    height: "3rem",
                    width: "100%",
                    maxWidth: "18rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "9999px",
                    color: "white",
                    fontWeight: "600",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    textDecoration: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingSection;
