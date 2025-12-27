import React from 'react';
import { motion } from 'framer-motion';

const StageNo = () => {
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
};

export default StageNo;
