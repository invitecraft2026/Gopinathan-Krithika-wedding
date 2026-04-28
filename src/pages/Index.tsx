import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingScreen from "@/components/LandingScreen";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import ScratchCard from "@/components/ScratchCard";
import WeddingDetails from "@/components/WeddingDetails";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import ActionButtons from "@/components/ActionButtons";
import FloatingPetals from "@/components/FloatingPetals";
import BackgroundMusic from "@/components/BackgroundMusic";
import SpecialNote from "@/components/SpecialNote";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence>
        {!isOpen && <LandingScreen onOpen={() => setIsOpen(true)} />}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <BackgroundMusic />
          <FloatingPetals />

          {/* Top gold border */}
          <div className="h-1 gold-gradient" />

          <div className="max-w-2xl mx-auto">
            <HeroSection />

            <div className="flex items-center justify-center gap-3 my-4">
              <div className="h-px w-20 bg-primary/20" />
              <span className="text-primary/40 text-sm">✿</span>
              <div className="h-px w-20 bg-primary/20" />
            </div>

            <CountdownTimer />
            <ScratchCard />
            <WeddingDetails />
            {/* <GallerySection /> */}
            <SpecialNote/>
            <LocationSection />
            <ActionButtons />

            {/* Footer */}
            <footer className="text-center py-10 px-4">
              <p className="font-display text-2xl gold-text mb-2">
                Gopinathan & Krithika
              </p>
              <p className="text-xs text-muted-foreground">Made with love 🌸</p>
            </footer>

            <div className="h-1 gold-gradient" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
