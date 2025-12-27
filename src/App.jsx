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
        return (
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white font-sans text-center">
              Hi Adinda Sabrina! <span className="inline-block animate-bounce">🐮</span>
            </h1>

            <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-md max-w-md w-full text-center shadow-inner">
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                I have something I want to tell you...
              </p>
            </div>

            <button
              onClick={handleNext}
              className="px-8 py-3 bg-white/20 hover:bg-white/40 border border-white/50 rounded-full text-white font-semibold transition-all backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105"
            >
              What is it?
            </button>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center space-y-6">
            <div className="relative h-16 w-16 mb-2">
              <Heart className="w-16 h-16 text-pink-300 animate-bounce absolute inset-0 opacity-50 blur-sm" />
              <Heart className="w-16 h-16 text-pink-100 relative z-10" fill="currentColor" />
            </div>

            <div className="bg-white/10 p-5 md:p-6 rounded-xl border border-white/20 backdrop-blur-md max-w-md md:max-w-xl w-full text-center shadow-inner">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-4 text-justify">
                Every time i interact with you, my day gets a little brighter. Seluruh beban hidup yang aku miliki entah kenapa menjadi lebih ringan.
              </p>
              <p className="text-lg text-white/80 font-light">
                You have this way of making everything feel fun.
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
            <div className="flex gap-4 text-4xl animate-pulse mb-2">
              <span>🐔</span><span>🦆</span><span>🐇</span>
            </div>

            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md max-w-xl w-full text-center shadow-inner">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-4 text-justify">
                I love your smile, your laugh, your strength, the way you light up the room when you enter.
              </p>
              <p className="text-lg text-white/80 font-light">
                It’s like a gift that keeps on giving.
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
          <div className="flex flex-col items-center space-y-4">
            {/* Willu Image - Main Focus */}
            <div className="mb-2">
              <img
                src="/willu.jpg"
                alt="Willu"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white/30 shadow-2xl"
              />
            </div>

            <div className="bg-white/10 p-3 px-5 rounded-xl border border-white/20 backdrop-blur-md text-center shadow-inner">
              <p className="text-sm md:text-base text-white/90 font-light">
                Next time kita mukbang sushi dan dimsum mentai itu
              </p>
            </div>
            <button
              onClick={handleNext}
              className="mt-6 px-10 py-3 bg-white/20 hover:bg-white/40 rounded-full text-white font-semibold transition-all backdrop-blur-sm border border-white/30 hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              One last thing
            </button>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Stars className="w-6 h-6 text-yellow-300" />
              <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                Important Notes
              </h2>
              <Stars className="w-6 h-6 text-yellow-300" />
            </div>

            <div className="bg-gradient-to-br from-white/15 to-white/5 p-6 rounded-2xl border border-white/25 backdrop-blur-lg max-w-md md:max-w-2xl w-full shadow-xl">
              <div className="space-y-4 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 pr-2">
                <p className="text-lg text-white/95 font-medium leading-relaxed text-justify">
                  Setelah halaman ini kamu harus siap untuk membuat pilihan, whatever you choose i will always support it, intinya aku bakal nerima pilihan apapun yang kamu pilih <br />
                  Just choose what your heart want<br />
                  Oh yah aku ga akan bales chat mu kalo kamu belum make the choice. Jadi pastiin ketika kamu udah nentuin pilihan kamu, just chat me okay? <br />
                  One last thing, kamu ga perlu langsung ngasih aku jawaban pada hari ini, i'll wait as long as you need to answer.
                </p>
                <p className="text-base text-white/80 font-light leading-relaxed text-justify">
                  (btw jangan lupa chat ya kalo kamu udah buat choice nya, disini gaada fitur yang ngirim hasil pilihan kamu ke aku olehnya😭)
                </p>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="mt-4 px-10 py-3 bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600 hover:to-pink-600 rounded-full text-white font-semibold transition-all backdrop-blur-sm border border-white/30 hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Ready? <Heart size={18} className="fill-current" />
            </button>
          </div>
        );
      case 5:
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


      case 6:
        return (
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="w-20 h-20 md:w-32 md:h-32 text-red-500 drop-shadow-2xl mb-4" fill="currentColor" />
            </motion.div>
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 shadow-pink-500/50 drop-shadow-lg text-center">
              Yay! I'm so happy! 🎉
            </h1>
            <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 pr-4 mt-4">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify">
                Haloo dindin, ini beneran nih kamu pilih opsi iya!??, gila banget dunia ini <br /><br />
                THANK YOUUU UDAH PILIH IYA YAH‼️‼️‼️ <br /><br />
                Speechless banget nih aku, ga nyangka si adindut mau ngasih gua kesempatan😿, ga nyangka doa-doa aku terjawab😿 <br /><br />
                I know your last relationship might have given you some bad memories and trust issues with this kind of relationship, karena itu aku ga akan menyiakan kepercayaan yang udah kamu kasih ke aku, aku akan usahain sebaik mungkin to give the love you deserve. <br /><br />
                Perkataan doang sulit untuk nunjukin kebahagiaan aku dari kamu yang memilih untuk memberi aku kesempatan dalam menjalankan kisah romantis yang alay seperti di film-film, dibalik kekurangan dan kesalahan yang udah aku buat selamat beberapa bulan kita bertemu kembali ini, aku mau ngucapin makasih lagi ke kamu, karena kamu mau mencoba menerima aku for who I am, dan tentus saja AKU JANJI BAKAL BERUSAHA NGILANGIN BAD HABBITS DAN HAL BURUK LAINNYA DARI DIRI AKU. <br /><br />
                Mungkin masih banyak hal yang perlu aku pelajari dari hal-hal kek ginian, but i’ll try my best to improve upon it andi’ll do my best too to improve the way i treat you. I’ll try to make you the HAPPIEST GIRL EVER IN THE WORLD😋 <br /><br />
                Abis ini mungkin akan ada banyak tantangan dan rintangan untuk kita, but as long as we’ve got each other, aku rasa apapun bisa ditrabas💪 <br /><br />
                Ditunggu availablenya ya, nanti kita metu asik, gua traktir (kecuali playtopia)
              </p>
            </div>
          </div>
        );
      case 7:
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
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden p-4">
      {/* Background Carousel for Stage 1 */}
      {stage === 1 && (
        <BackgroundCarousel images={[
          "/foto1.jpg",
          "/foto2.jpg",
          "/foto3.jpg",
          "/foto4.jpg",
          "/foto5.jpg",
          "/foto6.jpg",
          "/foto7.jpg"
        ]} />
      )}

      {/* Enhanced 2D Background */}
      {stage !== 1 && <FloatingHearts />}

      {/* Background Decorative Elements */}
      {stage !== 1 && (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </>
      )}

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

      {stage !== 0 && <MusicPlayer currentTrack={currentTrack} showToggle={true} />}
      {stage === 0 && <MusicPlayer currentTrack={currentTrack} showToggle={false} />}
    </div>
  );
}

export default App;
