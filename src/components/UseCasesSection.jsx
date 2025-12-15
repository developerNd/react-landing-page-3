import React, { useState, useEffect } from "react";

function UseCasesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const useCases = [
    {
      title: "Buyer Lead Conversion",
      description:
        "Instantly call, qualify, and book showings with new buyer leads.",
    },
    {
      title: "24/7 Listing Inquiries",
      description:
        "Answer calls from signs & ads, provide property details, schedule a tour.",
    },
    {
      title: "Seller Lead Generation",
      description:
        "Outbound calling to generate listings, circle prospecting, offer CMAs.",
    },
    {
      title: "Database Nurturing & Reactivation",
      description:
        "Re-engage past clients, follow up on old leads, maintain your sphere.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .usecases-section * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .usecase-card {
          transition: all 0.3s ease;
        }
        
        .usecase-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .usecases-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .usecases-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .usecases-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .usecases-layout {
            grid-template-columns: 1fr 2fr;
          }
        }
      `}</style>

      <section
        id="usecases"
        className="usecases-section"
        style={{
          padding: "4rem 0",
          backgroundColor: "#F9FAFB",
        }}
      >
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div className="usecases-layout">
            {/* Left: Heading */}
            <div>
              <h2
                style={{
                  fontSize: isMobile ? "1.875rem" : "1.875rem",
                  fontWeight: "800",
                  lineHeight: "1.2",
                  color: "#111827",
                }}
              >
                Built for Agents, Teams, and Brokerages
              </h2>
              <p
                style={{
                  marginTop: "0.75rem",
                  color: "#374151",
                  fontSize: "1rem",
                  lineHeight: "1.625",
                }}
              >
                Deploy a specialized real estate AI in minutes—no complex setup
                required.
              </p>
            </div>

            {/* Right: Cards Grid */}
            <div className="usecases-grid">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="usecase-card"
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
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#111827",
                    }}
                  >
                    {useCase.title}
                  </div>
                  <p
                    style={{
                      marginTop: "0.25rem",
                      fontSize: "0.875rem",
                      color: "#374151",
                      lineHeight: "1.5",
                    }}
                  >
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UseCasesSection;
