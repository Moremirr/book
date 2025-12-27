import { motion } from 'framer-motion';

const BackgroundCarousel = ({ images }) => {
    // Duplicate images to ensure seamless loop if there are few images
    const loopedImages = [...images, ...images, ...images];

    return (
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for readability */}
            <motion.div
                className="flex"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, // Adjust speed here
                        ease: "linear",
                    },
                }}
                style={{
                    width: "fit-content",
                }}
            >
                {loopedImages.map((src, index) => (
                    <div
                        key={index}
                        className="w-screen h-screen flex-shrink-0 flex items-center justify-center"
                        style={{ width: '100vw' }} // Ensure each slide takes full width
                    >
                        <img
                            src={src}
                            alt={`Carousel ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default BackgroundCarousel;
