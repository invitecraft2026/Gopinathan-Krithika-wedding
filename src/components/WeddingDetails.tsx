import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

const events = [
  {
    title: "Haldi & Mehendi",
    date: "May 23, 2026",
    time: "4:00 PM - 6:00 PM",
    venue: "Bride's House",
    icon: Sparkles,
  },
  {
    title: "Wedding Reception",
    date: "May 24, 2026",
    time: "6:00 PM - 9:00 PM",
    venue: "Muthu Mahal, Irumborai, Coimbatore",
    icon: Calendar,
  },
  {
    title: "Muhurtham",
    date: "May 25, 2026",
    time: "5:30 AM - 6:00 AM",
    venue: "Kumarankundru Temple, Coimbatore",
    icon: Sparkles,
  },
];

const WeddingDetails = () => {
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
          Wedding Events
        </h2>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-10 bg-primary/40" />
          <span className="text-primary">✿</span>
          <div className="h-px w-10 bg-primary/40" />
        </div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              className="invitation-card rounded-2xl p-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                  <event.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {event.title}
                </h3>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground ml-13">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{event.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingDetails;