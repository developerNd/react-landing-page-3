import React from "react";

function TrustedCompanies() {
  // Array of company logos - you'll add these images to public/assets/images/companies/
  const companies = [
    { name: "globalsurvey", src: "/assets/images/companies/logo1.png" },
    { name: "elicitresearch", src: "/assets/images/companies/logo2.png" },
    { name: "progresso-research", src: "/assets/images/companies/logo3.png" },
    { name: "kyrios", src: "/assets/images/companies/logo4.png" },
    { name: "alzainresearchgroup", src: "/assets/images/companies/logo5.png" },
    { name: "globalexchange", src: "/assets/images/companies/logo6.png" },
    { name: "incentiveopinion", src: "/assets/images/companies/logo7.png" },
    { name: "crunched-analytics", src: "/assets/images/companies/logo8.png" },
    { name: "datadiggers-mr", src: "/assets/images/companies/logo9.png" },
    { name: "pirkx", src: "/assets/images/companies/logo10.png" },
    { name: "gradready", src: "/assets/images/companies/logo11.png" },
    { name: "apporto", src: "/assets/images/companies/logo12.png" },
    { name: "rovi", src: "/assets/images/companies/logo13.png" },
    { name: "cyberpublicity", src: "/assets/images/companies/logo14.png" },
    { name: "innovatemr", src: "/assets/images/companies/logo15.png" },
    { name: "purespectrum", src: "/assets/images/companies/logo16.png" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .trusted-companies-section * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .trust-bleed {
          overflow: hidden;
          width: 100%;
        }
        
        .logo-marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .logo-track {
          display: flex;
          gap: 1.5rem;
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        
        .logo-track:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logo {
          flex-shrink: 0;
          width: 180px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F5F5F5;
          border-radius: 0.75rem;
          border: 1px solid rgba(0, 0, 0, 0.06);
          padding: 1rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
        }
        
        .logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .logo:hover img {
          opacity: 1;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
          .logo {
            width: 140px;
            height: 60px;
            padding: 0.875rem;
          }
          
          .logo-track {
            gap: 1rem;
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>

      <section
        className="trusted-companies-section"
        style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "13px",
              color: "#374151",
              marginBottom: "1.5rem",
              fontWeight: "500",
            }}
          >
            Trusted by 500+ Businesses worldwide and counting
          </p>
        </div>

        <div className="trust-bleed">
          <div className="logo-marquee">
            <div className="logo-track">
              {/* First set of logos */}
              {companies.map((company, index) => (
                <div key={`logo-${index}`} className="logo">
                  <img
                    src={company.src}
                    alt={company.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div key={`logo-duplicate-${index}`} className="logo">
                  <img
                    src={company.src}
                    alt={company.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrustedCompanies;
