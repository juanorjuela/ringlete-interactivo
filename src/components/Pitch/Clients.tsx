import { motion } from 'framer-motion';

const clients = [
  { name: 'Cliente 1', logo: '🟩' },
  { name: 'Cliente 2', logo: '🟦' },
  { name: 'Cliente 3', logo: '🟧' },
  { name: 'Cliente 4', logo: '🟪' },
];

const Clients = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-4xl font-space-grotesk font-bold text-center text-green-700 mb-8"
    >
      Clientes y <span className="text-green-500">proyectos</span>
    </motion.h2>
    <div className="flex flex-wrap gap-8 justify-center items-center mb-8">
      {clients.map(c => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl shadow"
        >
          <span>{c.logo}</span>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto text-center"
    >
      <p className="font-outfit text-gray-800 mb-2">Fundador con 10+ años de experiencia en arte, tecnología y marketing interactivo.</p>
    </motion.div>
  </section>
);

export default Clients; 