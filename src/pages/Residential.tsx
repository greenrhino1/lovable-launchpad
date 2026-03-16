import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Home, ArrowRight, Lock, KeyRound, DoorOpen, ShieldCheck, Wrench, ScanLine } from "lucide-react";
import vanHero from "@/assets/van-hero.png";

const services = [
  { icon: Lock, title: "Lock Installation", desc: "Professional installation of deadbolts, knob locks, and smart locks for every door in your home." },
  { icon: KeyRound, title: "Lock Rekeying", desc: "Change your locks' internal pins so old keys no longer work — faster and cheaper than full replacement." },
  { icon: DoorOpen, title: "Home Lockout", desc: "Locked out of your house? We'll get you back inside quickly without damaging your door or lock." },
  { icon: ShieldCheck, title: "Smart Lock Setup", desc: "Upgrade to keyless entry with smart lock installation, programming, and integration with your home system." },
  { icon: Wrench, title: "Lock Repair", desc: "Fix sticky, jammed, or broken locks. We repair all major brands and restore full functionality." },
  { icon: ScanLine, title: "Security Assessment", desc: "A full evaluation of your home's locks and entry points with recommendations to improve safety." },
];

const Residential = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 bg-white relative overflow-hidden">
        <img src={vanHero} alt="Easy Pick Locksmith Van" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/30">
              <Home className="inline h-4 w-4 mr-1 -mt-0.5" /> Residential
            </span>
            <h1 className="text-5xl md:text-7xl text-secondary-foreground leading-[0.9] mb-6">
              Home <span className="text-primary">Locksmith</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg max-w-lg">
              Keep your family safe with professional residential locksmith services — from lockouts to full security upgrades.
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

export default Residential;
