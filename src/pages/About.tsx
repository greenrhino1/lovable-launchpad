import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Users, value: "5,000+", label: "Happy Customers" },
  { icon: Shield, value: "100%", label: "Licensed & Insured" },
  { icon: Award, value: "24/7", label: "Available" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-white relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/30">
              About Us
            </span>
            <h1 className="text-5xl md:text-7xl text-secondary-foreground leading-[0.9] mb-6">
              Your Trusted <span className="text-primary">Local Locksmith</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg max-w-lg">
              For over a decade, Easy Pick Locksmith has been the go-to locksmith for homes, businesses, and vehicles in our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl text-foreground mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Easy Pick Locksmith was founded with a simple mission: provide fast, honest, and affordable locksmith services that people can count on — day or night.
                </p>
                <p>
                  What started as a one-person mobile operation has grown into a fully equipped team of certified locksmiths serving residential, commercial, and automotive customers across the region.
                </p>
                <p>
                  We believe that being locked out shouldn't mean being taken advantage of. That's why we offer upfront pricing, 24/7 availability, and a satisfaction guarantee on every job. Our technicians are background-checked, licensed, and trained on the latest lock and security technologies.
                </p>
                <p>
                  Whether you need a simple rekey, a master key system for your business, or emergency car key programming at 2 AM, Easy Pick Locksmith is here to help — fast.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-foreground mb-4">Why Choose Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Upfront Pricing", desc: "No hidden fees or surprise charges. We quote before we start, so you always know the cost." },
              { title: "Fast Response", desc: "Our average arrival time is just 15 minutes. When you're locked out, every minute counts." },
              { title: "Guaranteed Work", desc: "Every job comes with a satisfaction guarantee. If you're not happy, we'll make it right." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border text-center"
              >
                <h3 className="text-2xl text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
