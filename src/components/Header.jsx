import { useState } from "react";

function Header({ openLoginModal, openAppointmentModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .header-wrapper * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .header-wrapper {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          background-color: #FDFDFD;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        @supports (backdrop-filter: blur(10px)) {
          .header-wrapper {
            background-color: rgba(253, 253, 253, 0.9);
          }
        }
        
        .nav-link {
          transition: color 0.2s ease;
        }
        
        .nav-link:hover {
          color: #4f46e5;
        }
        
        .btn-primary {
          transition: background-color 0.2s ease;
        }
        
        .btn-primary:hover {
          background-color: #4f46e5;
        }
        
        .btn-secondary {
          transition: background-color 0.2s ease;
        }
        
        .btn-secondary:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
      `}</style>

      <header className="header-wrapper">
        <nav
          style={{
            width: "100%",
            paddingLeft: "clamp(1.5rem, 3vw, 4rem)",
            paddingRight: "clamp(1.5rem, 3vw, 4rem)",
          }}
        >
          <div
            className="flex items-center justify-between h-16"
            style={{ maxWidth: "1600px" }}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img
                src="/assets/icons/mira.png"
                alt="CallMira Logo"
                className="h-9 w-9 rounded-xl object-cover"
                style={{ borderRadius: "0.75rem" }}
              />
              <span className="text-lg font-semibold">
                CallMira<span style={{ color: "#6366f1" }}>.ai</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#usecases" className="nav-link">
                Use cases
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <a href="#faq" className="nav-link">
                FAQ
              </a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={openLoginModal}
                className="btn-secondary px-4 py-2 rounded-xl border border-black/10"
                style={{
                  borderRadius: "0.75rem",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Log in
              </button>
              <button
                onClick={openAppointmentModal}
                className="btn-primary px-4 py-2 rounded-xl text-white font-semibold"
                style={{
                  borderRadius: "0.75rem",
                  backgroundColor: "#6366f1",
                  boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.2)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Book appointment
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-black/10"
              style={{
                borderRadius: "0.75rem",
                borderColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            style={{
              display: mobileMenuOpen ? "block" : "none",
              borderTop: "1px solid rgba(0, 0, 0, 0.05)",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              maxWidth: "1600px",
            }}
          >
            <div className="grid gap-2 text-sm">
              <a
                href="#features"
                className="px-2 py-2 rounded-lg hover:bg-black/5"
                style={{ borderRadius: "0.5rem" }}
              >
                Features
              </a>
              <a
                href="#usecases"
                className="px-2 py-2 rounded-lg hover:bg-black/5"
                style={{ borderRadius: "0.5rem" }}
              >
                Use cases
              </a>
              <a
                href="#pricing"
                className="px-2 py-2 rounded-lg hover:bg-black/5"
                style={{ borderRadius: "0.5rem" }}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="px-2 py-2 rounded-lg hover:bg-black/5"
                style={{ borderRadius: "0.5rem" }}
              >
                FAQ
              </a>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={openLoginModal}
                  className="flex-1 px-4 py-2 text-center rounded-xl border border-black/10"
                  style={{
                    borderRadius: "0.75rem",
                    borderColor: "rgba(0, 0, 0, 0.1)",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Log in
                </button>
                <button
                  onClick={openAppointmentModal}
                  className="flex-1 px-4 py-2 text-center rounded-xl text-white font-semibold"
                  style={{
                    borderRadius: "0.75rem",
                    backgroundColor: "#6366f1",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;