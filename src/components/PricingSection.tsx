import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingItems = [
  { title: "Residential Locksmith", description: "Call for pricing." },
  { title: "Commercial Locksmith", description: "Call for pricing." },
  { title: "Automotive Locksmith", description: "Call for pricing." },
  { title: "Emergency Service", description: "Call for pricing." },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl text-foreground mb-4">Pricing</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {pricingItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <h3 className="text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item.description}
              </p>
              <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
