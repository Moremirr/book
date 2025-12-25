import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars, Sparkles, Music } from 'lucide-react';
import GlassCard from './components/GlassCard';
import confetti from 'canvas-confetti';

function App() {
  const [stage, setStage] = useState(0);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const noBtnRef = useRef(null);

  const handleNext = () => {
    setStage((prev) => prev + 1);
  };

  const handleNoHover = () => {
    const x = Math.random() * 200 - 100; // -100 to 100
    const y = Math.random() * 200 - 100;
    setNoBtnPosition({ x, y });
  };

  const handleYes = () => {
    setStage(4);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#ffffff']
    });
    // Fire more confetti after a delay
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 500);
  };

  // Content for each stage
  const renderContent = () => {
    switch (stage) {
      case 0:
        return (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg text-white font-sans">
              Hi there... <span className="inline-block animate-pulse">✨</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
              I have something I want to tell you.
            </p>
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-white/20 hover:bg-white/40 border border-white/50 rounded-full text-white font-semibold transition-all backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105"
            >
              Okay?
            </button>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <Heart className="w-16 h-16 text-pink-300 animate-bounce absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-50 blur-sm" />
              <Heart className="w-16 h-16 text-pink-100 relative z-10" fill="currentColor" />
            </div>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              Every time I see you, my day gets a little brighter.
            </p>
            <p className="text-lg text-white/80">
              You have this way of making everything feel special.
            </p>
            <button
              onClick={handleNext}
              className="mt-4 px-8 py-2 bg-white/10 hover:bg-white/30 rounded-full text-white border border-white/30 transition-all flex items-center gap-2"
            >
              Next <Sparkles size={16} />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center space-y-6">
            <Stars className="w-16 h-16 text-yellow-200 animate-spin-slow" />
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              I love your smile, your laugh, and just being around you.
            </p>
            <p className="text-lg text-white/80">
              I've been feeling this way for a while now...
            </p>
            <button
              onClick={handleNext}
              className="mt-4 px-8 py-2 bg-white/10 hover:bg-white/30 rounded-full text-white border border-white/30 transition-all flex items-center gap-2"
            >
              Continue <Sparkles size={16} />
            </button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white drop-shadow-md">
              Will you be my girlfriend?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 mt-4 items-center justify-center relative w-full h-32 md:h-auto">
              {/* YES Button */}
              <button
                onClick={handleYes}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full text-white text-xl font-bold shadow-lg transform transition hover:scale-110 z-20"
              >
                Yes! 💖
              </button>

              {/* NO Button (Runs Away) */}
              <motion.button
                ref={noBtnRef}
                animate={noBtnPosition}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onHoverStart={handleNoHover}
                onClick={handleNoHover} // Just in case on mobile click
                className="px-10 py-4 bg-gray-500/50 hover:bg-gray-600/50 rounded-full text-white/80 text-xl font-semibold backdrop-blur-sm shadow-inner absolute md:static"
                style={{ top: 'auto', left: 'auto' }} // Reset static positioning quirks if needed
              >
                No
              </motion.button>
            </div>
            <p className="text-xs text-white/50 mt-12">( Hint: The other button is broken 😉 )</p>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="w-32 h-32 text-red-500 drop-shadow-2xl mb-6" fill="currentColor" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-pink-500/50 drop-shadow-lg">
              Yay! I'm so happy! 🎉
            </h1>
            <p className="text-xl text-white/90">
              Best decision ever. ❤️
            </p>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-8 text-6xl"
            >
              🥰
            </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <AnimatePresence mode="wait">
        <GlassCard key={stage}>
          {renderContent()}
        </GlassCard>
      </AnimatePresence>
    </div>
  );
}

export default App;
