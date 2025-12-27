import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const StageMessage1 = ({ onNext }) => {
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
                onClick={onNext}
                className="mt-4 px-8 py-2 bg-white/10 hover:bg-white/30 rounded-full text-white border border-white/30 transition-all flex items-center gap-2"
            >
                Next <Sparkles size={16} />
            </button>
        </div>
    );
};

export default StageMessage1;
