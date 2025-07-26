import { motion } from 'framer-motion';

const Investment = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-green-50 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-4xl font-space-grotesk font-bold text-center text-green-700 mb-8"
    >
      Inversión
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-lg md:text-2xl font-outfit text-center text-gray-800 max-w-2xl mb-8"
    >
      Buscamos aliados estratégicos para escalar Ringlete Interactivo. ¿Te interesa invertir o colaborar?
    </motion.p>
    <div className="flex flex-col md:flex-row gap-6 mt-4">
      <a href="/pitch.pdf" download className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-green-600 transition-all text-lg">Descargar pitch PDF</a>
      <a href="#contact" className="bg-white text-green-700 border border-green-500 font-bold px-6 py-3 rounded-lg shadow hover:bg-green-50 transition-all text-lg">Agendar reunión</a>
    </div>
  </section>
);

export default Investment; 