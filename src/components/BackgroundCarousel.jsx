import { motion } from 'framer-motion';

const BackgroundCarousel = ({ images }) => {
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
        { direction: 'right', duration: 80, offset: 0 },
        { direction: 'left', duration: 70, offset: 3 },
        { direction: 'right', duration: 90, offset: 5 },
    ];

    return (
        <div className="absolute -top-[50vh] -left-[50vw] w-[200vw] h-[200vh] overflow-hidden z-0 pointer-events-none flex flex-col">
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {rows.map((row, rowIndex) => {
                // Shuffle images differently for each row to avoid same images being adjacent
                const shuffledImages = shuffleArray(images, row.offset);
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
                            style={{
                                width: 'fit-content',
                                transform: 'translateZ(0)',
                                willChange: 'transform',
                                backfaceVisibility: 'hidden'
                            }}
                        >
                            {rowImages.map((src, index) => (
                                <div
                                    key={`${rowIndex}-${index}`}
                                    className="h-full flex-shrink-0 overflow-hidden"
                                    style={{ width: '45vw', minWidth: '200px' }}
                                >
                                    <img
                                        src={src}
                                        alt=""
                                        className="w-full h-full object-cover object-center"
                                        loading="eager"
                                        decoding="async"
                                        style={{ objectFit: 'cover', width: '100%', height: '100%', transform: "translateZ(0)" }}
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
