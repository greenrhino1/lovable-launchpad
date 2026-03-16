import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Siren, Clock, Phone, Lock, ShieldCheck, Wrench } from "lucide-react";

const services = [
  { icon: Clock, title: "15-Minute Response", desc: "We arrive fast — our average emergency response time is just 15 minutes, day or night." },
  { icon: Lock, title: "Emergency Lockout", desc: "Home, car, or office — we handle all emergency lockouts quickly and without damage." },
  { icon: ShieldCheck, title: "Break-In Repair", desc: "After a break-in, we secure your property immediately with lock replacement and reinforcement." },
  { icon: Wrench, title: "Lock Change on the Spot", desc: "Need an immediate lock change for safety? We carry inventory and install right away." },
  { icon: Phone, title: "24/7 Dispatch", desc: "Our emergency line is staffed around the clock. Call anytime — holidays and weekends included." },
  { icon: Siren, title: "Roadside Assistance", desc: "Stranded with a car lockout? Our mobile units reach you wherever you are for on-the-spot help." },
];

const Emergency = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 bg-white relative">
        <div className="absolute inset-0 bg-black/90" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/30">
              <Siren className="inline h-4 w-4 mr-1 -mt-0.5" /> Emergency
            </span>
            <h1 className="text-5xl md:text-7xl text-secondary-foreground leading-[0.9] mb-6">
              Emergency <span className="text-primary">Locksmith</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg max-w-lg">
              Locked out at 2 AM? We're available 24/7 with rapid response times to get you back in fast.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Emergency;
