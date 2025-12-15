import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .footer-section * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .footer-link {
          transition: color 0.2s ease;
          color: #374151;
        }
        
        .footer-link:hover {
          color: #6366f1;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <footer
        className="footer-section"
        style={{
          padding: "3rem 0",
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
          backgroundColor: "#F9FAFB",
        }}
      >
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div className="footer-grid">
            {/* Logo and Description */}
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src="/assets/icons/mira.png"
                    alt="CallMira Logo"
                    style={{
                      height: "2.25rem",
                      width: "2.25rem",
                      borderRadius: "0.75rem",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: "#111827",
                    }}
                  >
                    CallMira<span style={{ color: "#6366f1" }}>.ai</span>
                  </span>
                </a>
              </div>
              <p
                style={{
                  marginTop: "0.75rem",
                  fontSize: "0.875rem",
                  color: "#374151",
                  lineHeight: "1.5",
                }}
              >
                Human-sounding AI voice agents for sales, support, and ops.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <div
                style={{
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#111827",
                  fontSize: "1rem",
                }}
              >
                Product
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="#features"
                    className="footer-link"
                    style={{
                      fontSize: "0.875rem",

                      textDecoration: "none",
                    }}
                  >
                    Features
                  </a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="#pricing"
                    className="footer-link"
                    style={{
                      fontSize: "0.875rem",

                      textDecoration: "none",
                    }}
                  >
                    Pricing
                  </a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="#faq"
                    className="footer-link"
                    style={{
                      fontSize: "0.875rem",

                      textDecoration: "none",
                    }}
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Use Cases Links */}
            <div>
              <div
                style={{
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#111827",
                  fontSize: "1rem",
                }}
              >
                Use cases
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    color: "#374151",
                  }}
                >
                  Sales & SDR
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    color: "#374151",
                  }}
                >
                  Support
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    color: "#374151",
                  }}
                >
                  Collections
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <div
                style={{
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#111827",
                  fontSize: "1rem",
                }}
              >
                Company
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="/terms"
                    className="footer-link"
                    style={{
                      fontSize: "0.875rem",

                      textDecoration: "none",
                    }}
                  >
                    Terms
                  </a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="/privacy"
                    className="footer-link"
                    style={{
                      fontSize: "0.875rem",

                      textDecoration: "none",
                    }}
                  >
                    Privacy
                  </a>
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    color: "#374151",
                  }}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div
            style={{
              marginTop: "2rem",
              fontSize: "0.75rem",
              color: "#6b7280",
            }}
          >
            © {currentYear} CallMira.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
