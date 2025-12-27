import React from 'react';
import { Sparkles } from 'lucide-react';

const StageMessage2 = ({ onNext }) => {
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
                onClick={onNext}
                className="mt-4 px-8 py-2 bg-white/10 hover:bg-white/30 rounded-full text-white border border-white/30 transition-all flex items-center gap-2"
            >
                Continue <Sparkles size={16} />
            </button>
        </div>
    );
};

export default StageMessage2;
