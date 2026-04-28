import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {

  // Fixed wedding date (May 28, 2026, 6:00 AM - Muhurtham)
  const weddingDate = new Date("2026-05-28T06:00:00");

  function getTimeLeft() {
    const diff = weddingDate.getTime() - Date.now();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4">
      <motion.div
        className="text-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
          Counting down to
        </p>

        <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-8">
          Our Muhurtham Day
        </h2>

        <div className="grid grid-cols-4 gap-3">
          {units.map((u) => (
            <div key={u.label} className="invitation-card p-4 rounded-xl">
              <p className="font-heading text-3xl sm:text-4xl font-bold gold-text">
                {String(u.value).padStart(2, "0")}
              </p>

              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                {u.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;