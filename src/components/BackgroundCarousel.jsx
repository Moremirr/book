import { motion } from 'framer-motion';

const BackgroundCarousel = ({ images }) => {
    // Create multiple rows, each with duplicated images for seamless looping
    const rows = [
        { direction: 'right', duration: 40 },
        { direction: 'left', duration: 35 },
        { direction: 'right', duration: 45 },
        { direction: 'left', duration: 38 },
    ];

    return (
        <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none flex flex-col">
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {rows.map((row, rowIndex) => {
                // Offset images for each row to create variety
                const rowImages = [...images, ...images, ...images];
                const offset = rowIndex * 1; // Small offset per row
                const reorderedImages = [...rowImages.slice(offset), ...rowImages.slice(0, offset)];

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
                            {reorderedImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="h-full flex-shrink-0"
                                    style={{ width: '40vw', minWidth: '300px' }}
                                >
                                    <img
                                        src={src}
                                        alt={`Carousel row ${rowIndex + 1} image ${index + 1}`}
                                        className="w-full h-full object-cover"
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
