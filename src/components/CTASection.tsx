import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">
            Locked Out? <span className="text-primary">We're On Our Way.</span>
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto mb-8">
            Don't wait, our expert locksmiths are standing by 24/7 to help you get back in fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-6 rounded-full font-semibold shadow-lg shadow-primary/30">
              <Phone className="mr-2 h-5 w-5" />
              (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-full border-secondary-foreground/30 text-secondary-foreground bg-transparent hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
              Get a Free Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
