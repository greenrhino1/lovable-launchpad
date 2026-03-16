import { motion } from "framer-motion";

const DescriptionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Easy Pick Locksmith provides rapid, on-demand locksmith services wherever you are. Whether you're locked out at home, work, or on the road, our mobile team delivers fast, reliable solutions to get you back in. We bring convenience, speed, and peace of mind to our customers anytime, anywhere — 24/7.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DescriptionSection;
