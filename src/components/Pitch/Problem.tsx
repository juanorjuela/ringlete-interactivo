import { motion } from 'framer-motion';

const Problem = () => (
  <section className="min-h-[60vh] flex items-center justify-center bg-white">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-4xl font-space-grotesk font-extrabold text-center text-gray-900 max-w-2xl"
    >
      Las marcas se comunican<br />
      <span className="text-green-500">con métodos obsoletos</span>
    </motion.h2>
  </section>
);

export default Problem; 