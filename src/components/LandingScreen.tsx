import { motion } from "framer-motion";

interface LandingScreenProps {
  onOpen: () => void;
}

const LandingScreen = ({ onOpen }: LandingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />

      {/* Floating petals */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute text-primary/30 animate-petal-fall"
          style={{
            left: `${15 + i * 14}%`,
            fontSize: `${14 + (i % 3) * 6}px`,
            ["--fall-duration" as string]: `${6 + i * 2}s`,
            ["--fall-delay" as string]: `${i * 1.2}s`,
          }}
        >
          ✿
        </div>
      ))}

      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Om symbol */}
        <motion.p
          className="text-4xl text-primary mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          ॐ
        </motion.p>

        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Shubh Vivah
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          You are invited to a
        </motion.h1>

        <motion.h2
          className="font-display text-5xl sm:text-6xl md:text-7xl gold-text mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          Wedding Celebration
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="h-px w-16 bg-primary/40" />
          <span className="text-primary text-lg">✿</span>
          <div className="h-px w-16 bg-primary/40" />
        </motion.div>

        <motion.button
          onClick={onOpen}
          className="gold-gradient text-primary-foreground font-heading text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tap to Open Invitation
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default LandingScreen;
