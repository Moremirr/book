import React from 'react';

const StageIntro = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white font-sans text-center px-4">
                Hi Adinda Sabrina! <span className="inline-block animate-bounce">🐮</span>
            </h1>

            <div className="bg-white/10 p-6 md:p-8 rounded-xl border border-white/20 backdrop-blur-md max-w-sm md:max-w-md w-full text-center shadow-inner">
                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                    I have something I want to tell you...
                </p>
            </div>

            <button
                onClick={onNext}
                className="px-8 py-3 bg-white/20 hover:bg-white/40 border border-white/50 rounded-full text-white font-semibold transition-all backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105"
            >
                What is it?
            </button>
        </div>
    );
};

export default StageIntro;
