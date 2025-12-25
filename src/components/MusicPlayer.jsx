import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Set initial volume
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }

        // Attempt autoplay immediately
        const playAudio = async () => {
            try {
                if (audioRef.current) {
                    await audioRef.current.play();
                    setIsPlaying(true);
                }
            } catch (err) {
                console.log("Autoplay blocked, waiting for interaction");
                setIsPlaying(false);
            }
        };
        playAudio();

        // Interaction listener fallback
        const handleUserInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(e => console.error("Play failed:", e));
            }
            document.removeEventListener('click', handleUserInteraction);
        };

        document.addEventListener('click', handleUserInteraction);

        return () => {
            document.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Manual play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={togglePlay}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white/80 hover:bg-white/20 transition-all shadow-lg animate-pulse hover:animate-none"
            >
                {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
            {/* Explicitly set src and loop here */}
            <audio ref={audioRef} src="/sempurna.mp3" loop playsInline />
        </div>
    );
};

export default MusicPlayer;
