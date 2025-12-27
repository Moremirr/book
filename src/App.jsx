import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars, Sparkles } from 'lucide-react';
import GlassCard from './components/GlassCard';
import MusicPlayer from './components/MusicPlayer';
import BackgroundCarousel from './components/BackgroundCarousel';
import confetti from 'canvas-confetti';

// Lightweight 2D Floating Hearts Component
const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300/30"
          initial={{ x: `${heart.x}vw`, y: `110vh`, opacity: 0 }}
          animate={{ y: `-10vh`, opacity: [0, 1, 0] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ scale: heart.scale }}
        >
          <Heart fill="currentColor" size={40} />
        </motion.div>
      ))}
    </div>
  );
};

function App() {
  const [stage, setStage] = useState(0);
  const [confirmation, setConfirmation] = useState(null); // 'yes' | 'no' | null
  const [currentTrack, setCurrentTrack] = useState("/sempurna.mp3");


  const handleNext = () => {
    setStage((prev) => prev + 1);
  };

  const handleNo = () => {
    setConfirmation('no');
  };

  const executeNo = () => {
    setConfirmation(null);
    setStage(6); // Go to "No" page
    setCurrentTrack("/no-music.mp3"); // Placeholder for sad music
  };

  const handleYes = () => {
    setConfirmation('yes');
  };

  const executeYes = () => {
    setConfirmation(null);
    setStage(5); // Go to "Yes" page
    setCurrentTrack("/yes-music.mp3"); // Placeholder for happy music
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#ffffff']
    });
  };

  // Content for each stage
  const renderContent = () => {
    switch (stage) {
      case 0:
        return (
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white font-sans text-center">
              Hi Adinda Sabrina! <span className="inline-block animate-bounce">🐮</span>
            </h1>

            <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-md max-w-md w-full text-center shadow-inner">
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                I have something I want to tell you... 🐑
              </p>
            </div>

            <button
              onClick={handleNext}
              className="px-8 py-3 bg-white/20 hover:bg-white/40 border border-white/50 rounded-full text-white font-semibold transition-all backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105"
            >
              What is it? 🐣
            </button>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center space-y-6">
            <div className="relative mb-2">
              <Heart className="w-16 h-16 text-pink-300 animate-bounce absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-50 blur-sm" />
              <Heart className="w-16 h-16 text-pink-100 relative z-10" fill="currentColor" />
            </div>

            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md max-w-md w-full text-center shadow-inner">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-4">
                Every time I see you, my day gets a little brighter. 🐈
              </p>
              <p className="text-lg text-white/80 font-light">
                You have this way of making everything feel special.
              </p>
            </div>

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
            <BackgroundCarousel images={[
              "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1516589178581-a78c3564a7b5?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1976&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1516233758813-a38d024919c5?q=80&w=1968&auto=format&fit=crop"
            ]} />
            <div className="flex gap-4 text-4xl animate-pulse mb-2 relative z-10">
              <span>🐔</span><span>🦆</span><span>🐇</span>
            </div>

            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md max-w-md w-full text-center shadow-inner">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-4">
                I love your smile, your laugh, and your passion.
              </p>
              <p className="text-lg text-white/80 font-light">
                I've been feeling this way for a while now... 🐨
              </p>
            </div>

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
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg text-center">
              Message from me 💌
            </h1>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md max-w-md w-full text-center shadow-inner">
              <p className="text-lg text-white/90 italic font-light leading-relaxed">
                "Write your heartfelt letter here... Tell her everything you feel. <br />
                How much she means to you, your favorite memories, and why she's the one."
                <br /><br />
                (Edit this text in the code!)
              </p>
            </div>
            <button
              onClick={handleNext}
              className="mt-6 px-10 py-3 bg-white/20 hover:bg-white/40 rounded-full text-white font-semibold transition-all backdrop-blur-sm border border-white/30 hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              One last thing... <Heart size={20} className="fill-current" />
            </button>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white drop-shadow-md">
              Will you be my girlfriend?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 mt-4 items-center justify-center w-full">
              {/* YES Button */}
              <button
                onClick={handleYes}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full text-white text-xl font-bold shadow-lg transform transition hover:scale-110 z-20"
              >
                Yes! 💖
              </button>

              {/* NO Button */}
              <button
                onClick={handleNo}
                className="px-10 py-4 bg-gray-500/50 hover:bg-gray-600/50 rounded-full text-white/80 text-xl font-semibold backdrop-blur-sm shadow-inner transition hover:scale-105"
              >
                No
              </button>
            </div>

          </div>
        );


      case 5:
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
      case 6:
        return (
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0.9] }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-8xl mb-6 grayscale opacity-80">🥀</div>
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              It's okay...
            </h1>
            <p className="text-xl text-white/80 max-w-lg text-center leading-relaxed">
              I understand. Thank you for being honest with me. <br />
              I'm still glad we met.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Enhanced 2D Background */}
      <FloatingHearts />

      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <AnimatePresence mode="wait">
        <GlassCard key={stage}>
          {renderContent()}
        </GlassCard>
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white/10 border border-white/20 backdrop-blur-xl p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Are you sure? 🤔
              </h3>
              <p className="text-white/80 mb-8">
                {confirmation === 'yes'
                  ? "You're about to make me the happiest person alive! Ready?"
                  : "Are you really sure? Think about it one more time... 🥺"}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setConfirmation(null)}
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmation === 'yes' ? executeYes : executeNo}
                  className={`px-6 py-2 rounded-full text-white font-bold shadow-lg transition-all hover:scale-105 transform ${confirmation === 'yes'
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                    : "bg-gray-500 hover:bg-gray-600"
                    }`}
                >
                  I'm Sure!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer currentTrack={currentTrack} />
    </div>
  );
}

export default App;
