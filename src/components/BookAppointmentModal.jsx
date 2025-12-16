import React from "react";

function BookAppointmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .appointment-modal * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .appointment-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(42, 41, 41, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeIn 0.2s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .appointment-modal-container {
          background: white;
          border-radius: 1.5rem;
          max-width: 550px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          animation: scaleIn 0.3s ease-out;
        }
        
        .appointment-modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
        }
        
        .appointment-modal-close:hover {
          background-color: rgba(0, 0, 0, 0.1);
          transform: rotate(90deg);
        }
        
        .appointment-modal-content {
          padding: 3.5rem 3rem;
          text-align: center;
        }
        
        .modal-icon {
          width: 5rem;
          height: 5rem;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #6366f1 0%, #c026d3 100%);
          border-radius: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: slideUp 0.4s ease-out 0.1s both;
          box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.3);
        }
        
        .modal-title {
          font-size: 2rem;
          font-weight: 800;
          color: #171717;
          margin-bottom: 1rem;
          line-height: 1.2;
          animation: slideUp 0.4s ease-out 0.2s both;
        }
        
        .modal-description {
          font-size: 1.063rem;
          color: #525252;
          line-height: 1.7;
          margin-bottom: 2rem;
          animation: slideUp 0.4s ease-out 0.3s both;
        }
        
        .modal-highlight {
          background: linear-gradient(135deg, #6366f1 0%, #c026d3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }
        
        .contact-button {
          width: 100%;
          padding: 1.125rem 2rem;
          background: linear-gradient(135deg, #6366f1 0%, #c026d3 100%);
          color: white;
          border: none;
          border-radius: 0.875rem;
          font-size: 1.063rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
          animation: slideUp 0.4s ease-out 0.4s both;
        }
        
        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -5px rgba(99, 102, 241, 0.5);
        }
        
        .contact-info {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e5e5e5;
          animation: slideUp 0.4s ease-out 0.5s both;
        }
        
        .contact-info-text {
          font-size: 0.875rem;
          color: #737373;
          margin-bottom: 0.75rem;
        }
        
        .contact-methods {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .contact-method {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #6366f1;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .contact-method:hover {
          background: rgba(99, 102, 241, 0.15);
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .appointment-modal-container {
            border-radius: 1.25rem;
          }
          
          .appointment-modal-content {
            padding: 3rem 2rem;
          }
          
          .appointment-modal-close {
            top: 1rem;
            right: 1rem;
            width: 2rem;
            height: 2rem;
          }
          
          .appointment-modal-close svg {
            width: 16px;
            height: 16px;
          }
          
          .modal-icon {
            width: 4rem;
            height: 4rem;
            margin-bottom: 1.25rem;
          }
          
          .modal-icon svg {
            width: 36px;
            height: 36px;
          }
          
          .modal-title {
            font-size: 1.625rem;
          }
          
          .modal-description {
            font-size: 0.938rem;
          }
          
          .contact-button {
            font-size: 1rem;
            padding: 1rem 1.5rem;
          }
          
          .contact-methods {
            gap: 0.5rem;
          }
          
          .contact-method {
            padding: 0.5rem 0.875rem;
            font-size: 0.813rem;
          }
        }
      `}</style>

      <div className="appointment-modal">
        <div className="appointment-modal-overlay" onClick={onClose}>
          <div
            className="appointment-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="appointment-modal-close"
              onClick={onClose}
              type="button"
            >
              <svg
                fill="none"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.625 19.4375L0 1.8125L1.82813 0L19.4531 17.625L17.625 19.4375ZM1.82813 19.4375L0 17.625L17.625 0L19.4531 1.8125L1.82813 19.4375Z"
                  fill="#171717"
                ></path>
              </svg>
            </button>

            {/* Modal Content */}
            <div className="appointment-modal-content">
              <div className="modal-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="modal-title">
                Let's Transform Your Business with{" "}
                <span className="modal-highlight">AI Voice Agents</span>
              </h2>

              <p className="modal-description">
                Experience how our AI-powered voice agents can revolutionize
                your customer engagement. Get a personalized demo tailored to
                your real estate business needs and start converting more leads
                into closed deals with intelligent automation.
              </p>

              <button className="contact-button" onClick={() => {}}>
                Get in Touch Now
              </button>

              <div className="contact-info">
                <p className="contact-info-text">
                  Prefer to reach out directly?
                </p>
                <div className="contact-methods">
                  <button className="contact-method" onClick={() => {}}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Email Us
                  </button>
                  <button className="contact-method" onClick={() => {}}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Call Us
                  </button>
                  <button className="contact-method" onClick={() => {}}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.50999 11.26 2.00999 10.07C1.49999 8.84 1.23 7.65 1.23 6.51C1.23 5.77 1.39 5.06 1.71 4.41C2.04 3.74 2.53 3.15 3.21 2.64C4.03 1.99 4.93 1.66 5.88 1.66C6.24 1.66 6.6 1.74 6.91 1.9C7.24 2.06 7.52 2.3 7.74 2.64L10.2 6.16C10.42 6.48 10.58 6.77 10.69 7.05C10.8 7.32 10.86 7.58 10.86 7.82C10.86 8.13 10.77 8.44 10.59 8.73C10.42 9.03 10.17 9.34 9.85 9.65L9.01 10.52C8.88 10.65 8.82 10.8 8.82 11C8.82 11.1 8.84 11.19 8.87 11.29C8.91 11.39 8.95 11.47 8.98 11.54C9.2 11.94 9.59 12.45 10.15 13.06C10.72 13.67 11.33 14.29 11.98 14.9C12.61 15.51 13.22 16.12 13.84 16.69C14.45 17.25 14.96 17.63 15.37 17.85C15.44 17.88 15.52 17.92 15.61 17.96C15.71 17.99 15.81 18 15.92 18C16.14 18 16.29 17.93 16.42 17.8L17.25 16.98C17.57 16.66 17.88 16.41 18.18 16.25C18.47 16.08 18.76 15.99 19.08 15.99C19.32 15.99 19.57 16.04 19.85 16.16C20.13 16.27 20.42 16.43 20.74 16.64L24.3 19.13C24.64 19.35 24.88 19.61 25.02 19.93C25.16 20.25 25.23 20.57 25.23 20.92C25.23 21.41 25.13 21.89 24.93 22.35C24.73 22.81 24.46 23.23 24.09 23.61C23.56 24.13 22.97 24.53 22.28 24.8C21.6 25.08 20.87 25.22 20.09 25.22L17.45 22.75Z"
                        fill="currentColor"
                      />
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointmentModal;
