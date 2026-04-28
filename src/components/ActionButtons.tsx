import { motion } from "framer-motion";
import { Share2 } from "lucide-react";

const ActionButtons = () => {
  const handleWhatsAppShare = () => {
    const message =
      "Love has brought us together, and now we begin forever 💍✨\n\n" +
      "With joy in our hearts, we invite you to the Wedding of Gopinathan & Krithika 💖\n\n" +
      "Kindly open the link below to view our invitation and event details 🌸\n\n" +
      "Your presence will be a cherished blessing in our celebration ❤️\n\n" +
      window.location.href;

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-sm mx-auto flex flex-col gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.button
          onClick={handleWhatsAppShare}
          className="flex items-center justify-center gap-3 bg-accent text-accent-foreground font-heading text-lg py-4 rounded-full shadow-lg"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Share2 className="w-5 h-5" />
          Share on WhatsApp
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ActionButtons;