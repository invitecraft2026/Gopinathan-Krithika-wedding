import { useRef, useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const CONFETTI_COLORS = [
  "#b8860b", "#daa520", "#f5c842", "#e8a020",
  "#fff", "#ff6b6b", "#a855f7", "#22d3ee",
  "#f472b6", "#34d399", "#fb923c",
];

const FullScreenConfetti = () => {
  const pieces = Array.from({ length: 120 }, (_, i) => i);

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {pieces.map((i) => {
        const startX = Math.random() * 100;
        const endX = startX + (Math.random() * 40 - 20);
        const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        const size = Math.random() * 10 + 5;
        const duration = Math.random() * 2 + 1.5;
        const delay = Math.random() * 0.8;
        const rotate = Math.random() * 720 - 360;
        const shape = Math.random() > 0.5 ? "50%" : "2px";
        const startY = 40 + Math.random() * 20; // burst from middle of screen

        return (
          <motion.div
            key={i}
            initial={{
              left: `${startX}%`,
              top: `${startY}%`,
              opacity: 1,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              left: `${endX}%`,
              top: ["40%", "-10%", "110%"],
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 1],
              rotate,
            }}
            transition={{
              duration,
              delay,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: shape,
            }}
          />
        );
      })}
    </div>,
    document.body
  );
};

const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const isDrawing = useRef(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    const grad = ctx.createLinearGradient(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    grad.addColorStop(0, "#b8860b");
    grad.addColorStop(0.5, "#daa520");
    grad.addColorStop(1, "#b8860b");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    ctx.fillStyle = "#fff";
    ctx.font = "600 16px 'Cormorant Garamond', serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch to Reveal ✨", canvas.offsetWidth / 2, canvas.offsetHeight / 2 - 8);

    ctx.font = "400 13px 'Poppins', sans-serif";
    ctx.fillText("the Reception Date", canvas.offsetWidth / 2, canvas.offsetHeight / 2 + 16);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const cx = x - rect.left;
    const cy = y - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) cleared++;
    }

    if (cleared / (imageData.data.length / 4) > 0.4 && !isRevealed) {
      setIsRevealed(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }
  };

  const handleStart = () => { isDrawing.current = true; };
  const handleEnd = () => { isDrawing.current = false; };
  const handleMove = (x: number, y: number) => {
    if (isDrawing.current) scratch(x, y);
  };

  const groom = "Gopinathan";
  const bride = "Krithika";

  const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${groom}+%26+${bride}+Reception&dates=20260528T180000/20260528T210000&details=Join+us+for+the+Wedding+Reception+of+${groom}+%26+${bride}&location=DSK+Mahal`;

  return (
    <section className="py-16 px-4">
      {/* Full screen confetti via portal */}
      <AnimatePresence>
        {showConfetti && <FullScreenConfetti />}
      </AnimatePresence>

      <motion.div
        className="max-w-sm mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-3xl text-foreground mb-6">
          Reveal the Reception 
        </h2>

        <div
          className="relative invitation-card rounded-2xl overflow-hidden mx-auto"
          style={{ height: 220 }}
        >
          {/* Hidden content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            {/* <AnimatePresence>
              {isRevealed && (
                <motion.div
                  initial={{ scale: 0, rotate: -20, opacity: 0 }}
                  animate={{ scale: [0, 1.4, 1], rotate: [0, 10, 0], opacity: 1 }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                  className="text-4xl mb-2"
                >
                  🎉🎊✨
                </motion.div>
              )}
            </AnimatePresence> */}

            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-1">
              Save the Date
            </p>

            <motion.p
              className="font-heading text-2xl font-bold text-foreground"
              animate={isRevealed ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              May 28, 2026
            </motion.p>

            <p className="text-muted-foreground mt-1">6:00 PM – 9:00 PM</p>
            <p className="text-muted-foreground text-sm mt-1">DSK Mahal</p>

            <AnimatePresence>
              {isRevealed && (
                <motion.a
                  href={calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-4 inline-block px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                >
                  Add Reception to Calendar 📅
                </motion.a>
              )}
            </AnimatePresence>
          </div>

          {/* Scratch canvas */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full cursor-crosshair touch-none transition-opacity duration-500 ${
              isRevealed ? "opacity-0 pointer-events-none" : ""
            }`}
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
            onTouchStart={(e) => { handleStart(); scratch(e.touches[0].clientX, e.touches[0].clientY); }}
            onTouchEnd={handleEnd}
            onTouchMove={(e) => { e.preventDefault(); handleMove(e.touches[0].clientX, e.touches[0].clientY); }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ScratchCard;