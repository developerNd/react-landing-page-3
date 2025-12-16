import { useState, useEffect } from 'react';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustedCompanies from "./components/TrustedCompanies";
import FeaturesSection from "./components/FeaturesSection";
import UseCasesSection from "./components/UseCasesSection";
import AudioDemoSection from "./components/AudioDemoSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import LoginPage from "./components/LoginPage";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  
  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  // Auto-trigger modal after 20 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 20000); // 20 seconds = 20000 milliseconds

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div
      className="App"
      style={{ minHeight: "100vh", backgroundColor: "#F9FAFB" }}
    >
      {loginModalOpen ? (
        <LoginPage onClose={closeLoginModal} />
      ) : (
        <>
          <Header openLoginModal={openLoginModal} />
          <HeroSection />
          <TrustedCompanies />
          <FeaturesSection />
          <UseCasesSection />
          <AudioDemoSection />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
          <Footer />
          
          {/* Global Booking Modal */}
          <BookingModal isOpen={modalOpen} onClose={closeModal} />
        </>
      )}
    </div>
  );
}

export default App;