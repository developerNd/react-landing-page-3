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

function App() {
  return (
    <div
      className="App"
      style={{ minHeight: "100vh", backgroundColor: "#F9FAFB" }}
    >
      <Header />
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
    </div>
  );
}

export default App;
