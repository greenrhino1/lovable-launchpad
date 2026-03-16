import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import residentialImg from "@/assets/service-residential.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import automotiveImg from "@/assets/service-automotive.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";

const locations = [
  { image: residentialImg, label: "We come to your home!", path: "/services/residential" },
  { image: commercialImg, label: "We come to your business!", path: "/services/commercial" },
  { image: automotiveImg, label: "We come to your car!", path: "/services/automotive" },
  { image: emergencyImg, label: "We come to you 24/7!", path: "/services/emergency" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WeComeToYouSection = () => {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {locations.map((loc) => (
            <motion.div key={loc.label} variants={item}>
              <Link to={loc.path} className="group block relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={loc.image}
                  alt={loc.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/50 group-hover:bg-secondary/60 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl text-secondary-foreground">{loc.label}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WeComeToYouSection;
