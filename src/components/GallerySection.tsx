import { motion } from "framer-motion";

// ✅ Import your images (replace filenames with yours)
import img1 from "@/assets/photo1.jpeg";
import img2 from "@/assets/photo2.jpeg";


const GallerySection = () => {
  const photos = [
    { id: 1, src: img1, label: "Engagement" },
    { id: 2, src: img2, label: "Ring Ceremony" },
    
  ];

  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2">
          Our Moments
        </h2>

        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-10 bg-primary/40" />
          <span className="text-primary">✿</span>
          <div className="h-px w-10 bg-primary/40" />
        </div>

        {/* ✅ Gallery Grid */}
       <div className="grid grid-cols-2 gap-4">
  {photos.map((photo, i) => (
    <motion.div
      key={photo.id}
      className="invitation-card rounded-2xl overflow-hidden aspect-[1080/1417]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15 }}
    >
      <img
        src={photo.src}
        alt={photo.label}
        className="w-full h-full object-cover"
      />
    </motion.div>
  ))}
</div>

        <p className="text-xs text-muted-foreground mt-4 italic">
          Our beautiful memories together ❤️
        </p>
      </motion.div>
    </section>
  );
};

export default GallerySection;