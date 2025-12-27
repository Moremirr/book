import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

import GlassCard from './components/GlassCard';
import MusicPlayer from './components/MusicPlayer';
import BackgroundCarousel from './components/BackgroundCarousel';
import FloatingHearts from './components/FloatingHearts';

import StageIntro from './stages/StageIntro';
import StageMessage1 from './stages/StageMessage1';
import StageMessage2 from './stages/StageMessage2';
import StageMessage3 from './stages/StageMessage3';
import StageImportantNote from './stages/StageImportantNote';
import StageQuestion from './stages/StageQuestion';
import StageYes from './stages/StageYes';
import StageNo from './stages/StageNo';

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
    setStage(7); // Go to "No" page
    setCurrentTrack("/no-music.mp3"); // Placeholder for sad music
  };

  const handleYes = () => {
    setConfirmation('yes');
  };

  const executeYes = () => {
    setConfirmation(null);
    setStage(6); // Go to "Yes" page
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
        return <StageIntro onNext={handleNext} />;
      case 1:
        return <StageMessage1 onNext={handleNext} />;
      case 2:
        return <StageMessage2 onNext={handleNext} />;
      case 3:
        return <StageMessage3 onNext={handleNext} />;
      case 4:
        return <StageImportantNote onNext={handleNext} />;
      case 5:
        return <StageQuestion onYes={handleYes} onNo={handleNo} />;
      case 6:
        return <StageYes />;
      case 7:
        return <StageNo />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-[100dvh] w-full overflow-x-hidden flex flex-col">
      {/* Global Fixed Background */}
      <div className="fixed-background" />

      {/* Background Carousel for Stage 1 (Oversized & Fixed) */}
      <AnimatePresence>
        {stage === 1 && (
          <motion.div
            className="fixed inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BackgroundCarousel images={[
              "/foto1.jpg",
              "/foto2.jpg",
              "/foto3.jpg",
              "/foto4.jpg",
              "/foto5.jpg",
              "/foto6.jpg",
              "/foto7.jpg"
            ]} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
        {/* Enhanced 2D Background */}
        {stage !== 1 && <FloatingHearts />}

        {/* Background Decorative Elements */}
        {stage !== 1 && (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </>
        )}
      </div>

      {/* Content Layer (Respects Safe Area Padding) */}
      <div className="relative flex-grow w-full flex items-center justify-center p-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] z-10 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-center w-full max-w-lg">
          <AnimatePresence mode="wait">
            <GlassCard key={stage}>
              {renderContent()}
            </GlassCard>
          </AnimatePresence>
        </div>
      </div>

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
              className="bg-white/10 border border-white/20 backdrop-blur-xl p-8 rounded-2xl max-w-md w-full text-center shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Are you sure? 🤔
              </h3>
              <p className="text-white/80 mb-8">
                {confirmation === 'yes'
                  ? "You're about to be stuck with me, are you ready?"
                  : "Are you really sure? I can wait if you need more time to think"}
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

      <MusicPlayer currentTrack={currentTrack} showToggle={stage !== 0} />
    </div>
  );
}

export default App;
