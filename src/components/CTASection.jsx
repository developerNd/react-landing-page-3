import React, { useState } from "react";

function CTASection() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(
    "One of our specialists will call you to schedule your demo."
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setStatus("Thank you! We will contact you shortly.");
    // Reset form
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .cta-section * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .cta-button {
          transition: background-color 0.2s ease;
        }
        
        .cta-button:hover {
          background-color: #6366f1;
        }
        
        .cta-input:focus {
          outline: none;
          box-shadow: 0 0 0 2px #6366f1;
        }
        
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          align-items: stretch;
        }
        
        @media (min-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr 1fr auto;
          }
        }
      `}</style>

      <section
        id="cta"
        className="cta-section"
        style={{
          padding: "5rem 0",
          backgroundColor: "#F9FAFB",
        }}
      >
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            style={{
              borderRadius: "1.5rem",
              padding: "3rem 2rem",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(10px)",
              textAlign: "center",
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(1.9rem, 5vw, 2.25rem)",
                fontWeight: "800",
                color: "#111827",
                lineHeight: "1.2",
              }}
            >
              Ready to never miss a lead again?
            </h2>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#374151",
                fontSize: "1rem",
              }}
            >
              Start qualifying leads automatically in minutes. No code required.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="cta-grid"
              style={{
                marginTop: "1.5rem",
                maxWidth: "48rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <label
                htmlFor="ctaEmail"
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  border: 0,
                }}
              >
                Work email
              </label>
              <input
                id="ctaEmail"
                type="email"
                required
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cta-input"
                style={{
                  width: "100%",
                  height: "3rem",
                  padding: "0 1rem",
                  borderRadius: "1rem",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  fontSize: "1rem",
                }}
              />

              <label
                htmlFor="ctaPhone"
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  border: 0,
                }}
              >
                Phone
              </label>
              <input
                id="ctaPhone"
                type="tel"
                inputMode="tel"
                required
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="cta-input"
                style={{
                  width: "100%",
                  height: "3rem",
                  padding: "0 1rem",
                  borderRadius: "1rem",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  fontSize: "1rem",
                }}
              />

              <button
                type="submit"
                className="cta-button"
                style={{
                  height: "3rem",
                  padding: "0 1.25rem",
                  borderRadius: "1rem",
                  backgroundColor: "#4f46e5",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "1rem",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Get a Live Demo
              </button>
            </form>

            {/* Status Message */}
            <p
              style={{
                marginTop: "0.75rem",
                fontSize: "0.75rem",
                color: "#6b7280",
              }}
            >
              {status}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTASection;
