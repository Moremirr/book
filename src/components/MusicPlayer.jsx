import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio("/sempurna.mp3"));

    useEffect(() => {
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;

        // Attempt autoplay immediately (might fail)
        const playAudio = async () => {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (err) {
                console.log("Autoplay blocked, waiting for interaction");
                setIsPlaying(false);
            }
        };
        playAudio();

        // Fix: Add interaction listener to bypass browser autoplay policy
        const handleUserInteraction = () => {
            if (audioRef.current.paused) {
                audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log("Play failed:", e));
            }
            // Remove listener after first interaction
            document.removeEventListener('click', handleUserInteraction);
        };

        document.addEventListener('click', handleUserInteraction);

        // Cleanup
        return () => {
            audioRef.current.pause();
            document.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
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
            <audio ref={audioRef} />
        </div>
    );
};

export default MusicPlayer;
