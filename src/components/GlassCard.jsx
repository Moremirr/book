import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', ...props }) => {
    return (
        <motion.div
            className={`glass p-8 md:p-12 text-center max-w-lg w-full mx-4 shadow-2xl ${className}`}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
