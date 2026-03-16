import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import WeComeToYouSection from "@/components/WeComeToYouSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DescriptionSection />
      <WeComeToYouSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
