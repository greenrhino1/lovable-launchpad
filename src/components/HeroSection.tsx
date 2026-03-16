import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-locksmith.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional locksmith service" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-secondary-foreground leading-[0.9] mb-6">
              Easy Pick<br />
              <span className="text-primary">Locksmith</span>
            </h1>
            <p className="text-secondary-foreground/80 text-lg md:text-xl max-w-lg mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We're here to help with our fast and friendly mobile locksmith services! Whether you need emergency lockout help or lock installation, we'll come right to you. Just give us a call!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button size="lg" className="text-lg px-10 py-6 rounded-[7px] font-semibold bg-foreground text-background hover:bg-foreground/90">
              <Phone className="mr-2 h-5 w-5" />
              Talk to Agent
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
