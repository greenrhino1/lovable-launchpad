import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Car, KeyRound, Wrench, Lock, Radio, CircuitBoard } from "lucide-react";

const services = [
  { icon: Lock, title: "Car Lockout", desc: "Locked your keys in the car? We'll get you back on the road fast without damaging your vehicle." },
  { icon: KeyRound, title: "Key Cutting", desc: "Precision key cutting for all vehicle makes and models, including high-security and laser-cut keys." },
  { icon: Radio, title: "Transponder Programming", desc: "Program new transponder chip keys to communicate with your vehicle's immobilizer system." },
  { icon: CircuitBoard, title: "Key Fob Replacement", desc: "Lost or broken key fob? We supply and program replacement remotes for most vehicle brands." },
  { icon: Wrench, title: "Ignition Repair", desc: "Fix stuck, worn, or broken ignition cylinders so your key turns smoothly every time." },
  { icon: Car, title: "Emergency Trunk Opening", desc: "Locked something in your trunk? We open it quickly and safely without damage." },
];

const Automotive = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 bg-white relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/30">
              <Car className="inline h-4 w-4 mr-1 -mt-0.5" /> Automotive
            </span>
            <h1 className="text-5xl md:text-7xl text-secondary-foreground leading-[0.9] mb-6">
              Auto <span className="text-primary">Locksmith</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg max-w-lg">
              Car lockouts, key programming, and ignition repair — mobile service that comes to you, wherever you are.
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

export default Automotive;
