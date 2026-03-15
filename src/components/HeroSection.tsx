import { motion } from "framer-motion";
import { Phone, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-locksmith.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional locksmith service" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 border border-primary/30">
              24/7 Emergency Service
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-secondary-foreground leading-[0.9] mb-6">
              Easy Pick<br />
              <span className="text-primary">Locksmith</span>
            </h1>
            <p className="text-secondary-foreground/80 text-lg md:text-xl max-w-lg mb-8 font-normal" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Fast, reliable locksmith services when you need them most. Residential, commercial, and automotive — we've got you covered.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold shadow-lg shadow-primary/30">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
              Get a Free Quote
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Clock, text: "15-Min Response" },
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Phone, text: "24/7 Available" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-secondary-foreground/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
