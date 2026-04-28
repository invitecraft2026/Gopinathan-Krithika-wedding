import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const venues = [
  {
    title: "Reception",
    name: "Muthu Mahal",
    address: "Irumborai, Coimbatore, Tamil Nadu",
    time: "May 24, 2026 • 6:00 PM – 9:00 PM",
    mapLink: "https://maps.google.com/?q=Muthu+Mahal+Irumborai+Coimbatore",
  },
  {
    title: "Wedding Ceremony",
    name: "Kumarankundru Temple",
    address: "Coimbatore, Tamil Nadu, India",
    time: "May 25, 2026 • 5:30 AM – 6:00 AM",
    mapLink: "https://maps.google.com/?q=Kumarankundru+Temple+Coimbatore",
  },
  
];

const LocationSection = () => {
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
          Venues
        </h2>

        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-10 bg-primary/40" />
          <span className="text-primary">✿</span>
          <div className="h-px w-10 bg-primary/40" />
        </div>

        {/* ✅ Venue Cards */}
        <div className="space-y-6">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.title}
              className="invitation-card rounded-2xl p-6 text-left shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Title */}
              <p className="text-xs uppercase tracking-widest text-primary mb-2">
                {venue.title}
              </p>

              {/* Venue Name */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {venue.name}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-2 text-muted-foreground text-sm mb-1">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>{venue.address}</span>
              </div>

              {/* Time */}
              <p className="text-sm text-muted-foreground mb-4">
                {venue.time}
              </p>

              {/* Button */}
              <a
                href={venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
              >
                Get Directions →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;