import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio("/sempurna.mp3"));

    useEffect(() => {
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;

        // Cleanup
        return () => {
            audioRef.current.pause();
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
