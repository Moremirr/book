import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

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

export default FloatingHearts;
