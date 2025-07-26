import { motion } from 'framer-motion';

const Market = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-green-50 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-4xl font-space-grotesk font-bold text-center text-green-700 mb-8"
    >
      Tamaño de <span className="text-green-500">mercado</span>
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-lg md:text-2xl font-outfit text-center text-gray-800 max-w-2xl mb-8"
    >
      El mercado de experiencias interactivas y marketing digital supera los <span className="font-bold text-green-700">$10B USD</span> anuales en LATAM.
    </motion.p>
    {/* Gráfica simple tipo barra */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1 }}
      className="w-full max-w-md h-8 bg-green-100 rounded-full overflow-hidden mb-4 origin-left"
      style={{ transformOrigin: 'left' }}
    >
      <div className="h-full bg-green-500 rounded-full" style={{ width: '80%' }} />
    </motion.div>
    <span className="text-green-700 font-bold font-space-grotesk text-lg">$10B+ USD</span>
  </section>
);

export default Market; 