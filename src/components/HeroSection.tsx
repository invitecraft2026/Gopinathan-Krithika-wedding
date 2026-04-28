import { motion } from "framer-motion";
import weddingCouple from "@/assets/wedding-couple-removebg.png";

const HeroSection = () => {
  return (
    <section className="py-12 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-sm mx-auto mb-8"
      >
        <div className="relative">
          <div className="absolute -inset-3 rounded-full border border-primary/20" />
          <img
            src={weddingCouple}
            alt="Wedding couple illustration - Hindu wedding"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-2">
          Gopinathan
        </h1>
        <span className="text-secondary text-3xl">❤️</span>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mt-2">
          Krithika
        </h1>

        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-12 bg-primary/40" />
          <p className="text-muted-foreground font-heading text-lg tracking-wide">
            Hindu Wedding Ceremony
          </p>
          <div className="h-px w-12 bg-primary/40" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;