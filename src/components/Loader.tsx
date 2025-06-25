import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Header - Clickable Title */}
      <Link to="/" className="absolute top-8 left-8 cursor-pointer group">
        <h1 className="text-4xl font-bold text-white mb-2">
          Ringlete Interactivo
        </h1>
        <h2 className="text-xl text-white/80">
          Comunicate Jugando
        </h2>
        <motion.div 
          className="h-0.5 bg-white origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </Link>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative flex flex-col items-center"
      >
        {/* Logo */}
        <motion.svg
          viewBox="0 0 800 800"
          className="w-[100px] h-[100px] relative z-10"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ 
            opacity: 1,
            rotate: 360,
          }}
          transition={{
            duration: 2,
            rotate: {
              repeat: Infinity,
              ease: "linear",
              duration: 3,
            }
          }}
        >
          <path
            d="M712.67,313.87l13.56-3.63-205.8-118.82h0s.04-.06.04-.06h0s0,0,0,0l-162.36,43.5-4.39,1.18-1.65-6.16-62.8,108.78-8.3-5.01-7.67-4.63,71.94-124.61-3.63-13.56-76.81,133.03-14.32-8.65-1.64-.99,85.95-148.86-3.63-13.56-90.81,157.29-15.96-9.64,99.95-173.12-3.63-13.56-104.82,181.55-15.96-9.64,113.96-197.38-3.63-13.56-118.82,205.8-.06-.04h0s0,0,0,0l43.5,162.36,1.18,4.39-6.16,1.65,108.78,62.8-9.64,15.96-124.61-71.94-13.56,3.63,133.03,76.81-9.64,15.96-148.86-85.95-13.56,3.63,157.29,90.81-9.64,15.96-173.12-99.95-13.56,3.63,181.55,104.82-9.64,15.96-197.38-113.95-13.56,3.63,205.8,118.82-.04.06h0s0,0,0,0h0s109.46-29.33,109.46-29.33l22.01-5.9,30.89-8.28,4.39-1.18,1.65,6.16,62.8-108.78,9.53,5.75,6.43,3.88-71.94,124.61,3.63,13.56,76.81-133.03,13.1,7.91,2.86,1.73-85.95,148.86,3.63,13.56,90.81-157.29,15.96,9.64-99.95,173.12,3.63,13.56,104.82-181.55,15.96,9.64-113.96,197.38,3.63,13.56,118.82-205.8h0s.06.04.06.04h0s0,0,0,0h0l-43.5-162.36-1.18-4.39,6.16-1.65-108.78-62.8,9.64-15.96,124.61,71.94,13.56-3.63-133.03-76.81,9.64-15.96,148.86,85.95,13.56-3.63-157.29-90.81,9.64-15.96,173.12,99.95,13.56-3.63-181.55-104.82,9.64-15.96,197.38,113.96Z"
            className="fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          />
        </motion.svg>

        {/* Loading text */}
        <motion.p
          className="mt-6 text-white/80 font-space-grotesk text-lg tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [10, 0, 10]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          CARGANDO
        </motion.p>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-8 right-8 text-right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/80"
        >
          <a href="mailto:contact@ringlete.com" className="block hover:text-white transition-colors">
            contact@ringlete.com
          </a>
          <div className="flex gap-4 justify-end mt-2 mb-4">
            <a href="https://instagram.com/ringlete" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="https://twitter.com/ringlete" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com/company/ringlete" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Ringlete Interactivo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader; 