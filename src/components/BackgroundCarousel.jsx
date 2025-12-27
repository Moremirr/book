import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const BackgroundCarousel = ({ images }) => {
    const [loadedImages, setLoadedImages] = useState([]);

    // Lazy load images for better performance
    useEffect(() => {
        const imagePromises = images.map((src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(src);
                img.onerror = () => resolve(src); // Still include even if error
                img.src = src;
            });
        });

        Promise.all(imagePromises).then(setLoadedImages);
    }, [images]);

    // Shuffle function to avoid same images next to each other
    const shuffleArray = (array, offset = 0) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = (i + offset) % shuffled.length;
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Create rows with different image orders to avoid adjacent duplicates
    const rows = [
        { direction: 'right', duration: 80, offset: 0 },  // Much slower
        { direction: 'left', duration: 70, offset: 3 },
        { direction: 'right', duration: 90, offset: 5 },
        { direction: 'left', duration: 75, offset: 2 },
    ];

    if (loadedImages.length === 0) {
        return (
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50" />
        );
    }

    return (
        <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none flex flex-col">
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {rows.map((row, rowIndex) => {
                // Shuffle images differently for each row to avoid same images being adjacent
                const shuffledImages = shuffleArray(loadedImages, row.offset);
                // Only duplicate once for lighter load
                const rowImages = [...shuffledImages, ...shuffledImages];

                return (
                    <div key={rowIndex} className="flex-1 overflow-hidden relative">
                        <motion.div
                            className="flex h-full absolute"
                            initial={{ x: row.direction === 'right' ? '-50%' : '0%' }}
                            animate={{
                                x: row.direction === 'right' ? '0%' : '-50%',
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    duration: row.duration,
                                    ease: 'linear',
                                },
                            }}
                            style={{ width: 'fit-content' }}
                        >
                            {rowImages.map((src, index) => (
                                <div
                                    key={`${rowIndex}-${index}`}
                                    className="h-full flex-shrink-0"
                                    style={{ width: '35vw', minWidth: '280px' }}
                                >
                                    <img
                                        src={src}
                                        alt=""
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
};

export default BackgroundCarousel;
