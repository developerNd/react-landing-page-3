import React from "react";

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We booked 29 showings in the first week. The voice agent felt like a seasoned ISA—friendly, on-script, and never misses a lead.",
      author: "Jordan, Ridgeview Realty, Austin TX",
    },
    {
      quote:
        "After-hours inquiries finally stopped slipping through. Calls and texts were answered instantly; tours got scheduled—even at 9:30 pm.",
      author: "Melissa, Harbor & Keys Group, Tampa FL",
    },
    {
      quote:
        "Polite follow-ups with tour confirmations and gentle pre-approval nudges lifted signed contracts by 22%.",
      author: "Chris, Sunstone Homes, Phoenix AZ",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .testimonials-section * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .testimonial-card {
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <section
        className="testimonials-section"
        style={{
          padding: "4rem 0",
          backgroundColor: "#F9FAFB",
        }}
      >
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <figure
                key={index}
                className="testimonial-card"
                style={{
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  backgroundColor: "white",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  margin: 0,
                }}
              >
                <blockquote
                  style={{
                    fontSize: "0.875rem",
                    color: "#1f2937",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  "{testimonial.quote}"
                </blockquote>
                <figcaption
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.75rem",
                    color: "#6b7280",
                  }}
                >
                  {testimonial.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialsSection;
