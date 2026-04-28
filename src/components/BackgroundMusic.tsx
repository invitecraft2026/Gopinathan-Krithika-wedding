import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(
      "/kanne kaniye.mpeg"
    );
    audio.loop = true;
    audio.volume = 0.2;
    audioRef.current = audio;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked — wait for user interaction
        const resumeAudio = () => {
          audio.play();
          document.removeEventListener("click", resumeAudio);
        };
        document.addEventListener("click", resumeAudio);
      });
    }

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      onClick={toggleMute}
      className="fixed right-4 top-4 z-50 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-lg hover:bg-card transition-colors"
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeX className="w-4 h-4 text-primary" />
      ) : (
        <Volume2 className="w-4 h-4 text-primary" />
      )}
    </motion.button>
  );
};

export default BackgroundMusic;
