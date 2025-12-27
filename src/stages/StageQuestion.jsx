import React from 'react';

const StageQuestion = ({ onYes, onNo }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-8 text-white drop-shadow-md text-center">
                Would you like to see where this could go with me?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 mt-4 items-center justify-center w-full">
                {/* YES Button */}
                <button
                    onClick={onYes}
                    className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full text-white text-xl font-bold shadow-lg transform transition hover:scale-110 z-20"
                >
                    Yes! 💖
                </button>

                {/* NO Button */}
                <button
                    onClick={onNo}
                    className="px-10 py-4 bg-gray-500/50 hover:bg-gray-600/50 rounded-full text-white/80 text-xl font-semibold backdrop-blur-sm shadow-inner transition hover:scale-105"
                >
                    No
                </button>
            </div>

        </div>
    );
};

export default StageQuestion;
