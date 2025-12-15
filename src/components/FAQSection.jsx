import React, { useState } from "react";

function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState([1]); // Second item (index 1) open by default

  const faqs = [
    {
      question: "Can the AI Employee speak multiple languages?",
      answer: "Yes. It's pretty awesome.",
    },
    {
      question: "Can I keep my current phone number?",
      answer:
        "Yes. Simply forward calls from your public phone number to your AI number, which we provide with your AI Employee.",
    },
    {
      question: "Can I use the AI Employee only after business hours?",
      answer:
        "Absolutely. Forward calls 24/7, only after hours, or in overflow (e.g., after the 2nd–3rd ring if a human doesn't pick up).",
    },
    {
      question: "Can I add live chat with the AI Employee to my website?",
      answer:
        "Yes. CallMira.ai includes built-in live chat at no extra cost—great for conversions and bookings.",
    },
    {
      question: "Can the AI Employee communicate via SMS?",
      answer:
        "Yes. It's omnichannel: phone, SMS, email, live chat, ManyChat, WhatsApp, Instagram, and more.",
    },
    {
      question: "Can it handle multiple calls at once?",
      answer: "Yes. Great for peak hours.",
    },
    {
      question: "Can the AI Employee make outbound event invites?",
      answer:
        "Yes. Upload contacts (name, number, details) via Google Sheets and launch personalized outbound campaigns.",
    },
    {
      question: "Is implementation really free?",
      answer:
        "Yes for standard features on this page. Custom CRM integrations or unique logic are billed separately.",
    },
    {
      question: "How long does implementation take?",
      answer: "Typically 2 hours to 2 days, depending on current workload.",
    },
    {
      question: "How do I change the AI Employee's behavior?",
      answer:
        "Simple edits (menu, hours) you can do yourself. Complex logic is best handled by our designers (from $65/hr).",
    },
    {
      question: "Can I listen to calls and see transcripts?",
      answer:
        "Yes—access recordings, transcripts, and summaries in your business portal.",
    },
    {
      question: "How does it stay updated on menu changes?",
      answer:
        "Manually upload updates, or enable a simple customization to auto-sync from your site or POS.",
    },
    {
      question: "Can it transfer a call to a human on request?",
      answer:
        "Yes—forward urgent inquiries to a manager, send ops requests via SMS/email, or collect details after hours. No code needed.",
    },
    {
      question: "Can I try it and cancel anytime?",
      answer:
        "Yes—monthly plans, no annual contract. Cancel anytime; you only pay for the current month.",
    },
    {
      question: "How do I get started?",
      answer:
        "Call Mira, our AI Receptionist, at +1 (251) 297-3254 to spin up your AI Employee and book a setup session.",
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const isOpen = (index) => openIndexes.includes(index);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .faq-section * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .faq-summary {
          list-style: none;
          cursor: pointer;
          user-select: none;
        }
        
        .faq-summary::-webkit-details-marker {
          display: none;
        }
        
        .faq-icon {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .faq-icon.open {
          transform: rotate(180deg);
        }
        
        /* Smooth transition for answer container using grid */
        .faq-answer-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .faq-answer-wrapper.open {
          grid-template-rows: 1fr;
        }
        
        /* Inner content wrapper for smooth animation */
        .faq-answer-inner {
          overflow: hidden;
        }
        
        /* Content padding only - no opacity or transform */
        .faq-answer-content {
          padding-bottom: 0;
          transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .faq-answer-wrapper.open .faq-answer-content {
          padding-bottom: 1.25rem;
        }
      `}</style>

      <section
        id="faq"
        className="faq-section"
        style={{
          padding: "4rem 0",
          backgroundColor: "#F9FAFB",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            {/* Heading */}
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "800",
                textAlign: "center",
                color: "#111827",
              }}
            >
              FAQs
            </h2>

            {/* FAQ List */}
            <div
              style={{
                marginTop: "2rem",
                borderRadius: "1rem",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                backgroundColor: "white",
              }}
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  style={{
                    borderTop:
                      index > 0 ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
                  }}
                >
                  {/* Question */}
                  <div
                    className="faq-summary"
                    onClick={() => toggleFAQ(index)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 1.25rem",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "600",
                        color: "#111827",
                        fontSize: "1rem",
                      }}
                    >
                      {faq.question}
                    </span>
                    <svg
                      className={`faq-icon ${isOpen(index) ? "open" : ""}`}
                      style={{
                        height: "1.25rem",
                        width: "1.25rem",
                        flexShrink: 0,
                        marginLeft: "1rem",
                      }}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 0 1 1.08 1.04l-4.25 4.25a.75.75 0 0 1-1.06 0L5.21 8.27a.75.75 0 0 1 .02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* Answer with smooth grid-based transition */}
                  <div
                    className={`faq-answer-wrapper ${
                      isOpen(index) ? "open" : ""
                    }`}
                  >
                    <div className="faq-answer-inner">
                      <div
                        className="faq-answer-content"
                        style={{
                          paddingLeft: "1.25rem",
                          paddingRight: "1.25rem",
                          fontSize: "0.875rem",
                          color: "#374151",
                          lineHeight: "1.5",
                        }}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQSection;
