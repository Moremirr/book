import React from 'react';

const StageMessage3 = ({ onNext }) => {
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
                onClick={onNext}
                className="mt-6 px-10 py-3 bg-white/20 hover:bg-white/40 rounded-full text-white font-semibold transition-all backdrop-blur-sm border border-white/30 hover:scale-105 flex items-center gap-2 shadow-lg"
            >
                One last thing
            </button>
        </div>
    );
};

export default StageMessage3;
