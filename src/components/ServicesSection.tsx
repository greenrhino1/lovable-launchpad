import { motion } from "framer-motion";
import { Home, Building2, Car, Siren, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "Home lockouts, lock rekeying, deadbolt installation, key duplication, and smart lock setup for your peace of mind.",
    features: ["Lock Installation & Repair", "Rekeying Services", "Smart Lock Setup", "Home Lockout Assistance"],
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Protect your business with master key systems, high-security locks, access control, and panic bar installation.",
    features: ["Master Key Systems", "Access Control", "High-Security Locks", "Panic Bar Installation"],
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Car lockouts, transponder key programming, ignition repair, and duplicate key cutting for all vehicle makes.",
    features: ["Car Lockout Service", "Transponder Key Programming", "Ignition Repair", "Key Cutting & Duplication"],
  },
  {
    icon: Siren,
    title: "Emergency",
    description: "Locked out? We provide rapid 24/7 emergency response with an average 15-minute arrival time, day or night.",
    features: ["24/7 Availability", "15-Min Response Time", "Break-In Repair", "Lock Change on the Spot"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Professional locksmith solutions tailored to your needs — fast, affordable, and always dependable.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <ArrowRight className="h-3 w-3 text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
