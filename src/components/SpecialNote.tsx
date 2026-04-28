import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const SpecialNote = () => {
  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-lg mx-auto invitation-card rounded-3xl p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Top Decoration */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10 bg-primary/40" />
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <div className="h-px w-10 bg-primary/40" />
        </div>

        {/* Title */}
        <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
          Special Note
        </h2>

        {/* Message */}
        <p className="text-muted-foreground leading-8 text-base sm:text-lg">
          With the blessings of our beloved family and elders,  
          we are delighted to invite you to celebrate our wedding day.
          <br /><br />
          Your love, presence, and blessings will make this occasion
          even more meaningful and memorable for us.
        </p>

        {/* Bottom Signature */}
        <p className="mt-8 font-display text-2xl gold-text">
          Gopinathan & Krithika
        </p>
      </motion.div>
    </section>
  );
};

export default SpecialNote;