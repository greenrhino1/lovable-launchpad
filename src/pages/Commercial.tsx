import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Building2, KeyRound, ShieldCheck, Lock, DoorOpen, ScanLine, Fingerprint } from "lucide-react";
import vanHero from "@/assets/van-hero.png";

const services = [
  { icon: KeyRound, title: "Master Key Systems", desc: "One key for management, unique keys for each office — streamlined access control for your business." },
  { icon: ShieldCheck, title: "High-Security Locks", desc: "Commercial-grade locks with pick-resistant, bump-proof technology to protect your assets." },
  { icon: Fingerprint, title: "Access Control", desc: "Keypad, card reader, and biometric entry systems for modern office security." },
  { icon: DoorOpen, title: "Panic Bar Installation", desc: "Fire-code compliant emergency exit hardware for commercial buildings and storefronts." },
  { icon: Lock, title: "Office Lockout", desc: "Locked out of your business? We respond fast so you can get back to work with minimal downtime." },
  { icon: ScanLine, title: "Security Audit", desc: "Comprehensive assessment of your building's security with actionable upgrade recommendations." },
];

const Commercial = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 min-h-[56vh] flex items-end bg-white relative overflow-hidden">
        <img src={vanHero} alt="Easy Pick Locksmith Van" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/30">
              <Building2 className="inline h-4 w-4 mr-1 -mt-0.5" /> Commercial
            </span>
            <h1 className="text-5xl md:text-7xl whitespace-nowrap text-secondary-foreground leading-[0.9] mb-6">
              Business <span className="text-primary">Locksmith</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg max-w-lg">
              Protect your business with professional commercial locksmith services — from master key systems to access control.
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

export default Commercial;
