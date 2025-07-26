import { motion } from 'framer-motion';

const formats = [
  { label: 'App', icon: '📱' },
  { label: 'AR', icon: '🕶️' },
  { label: 'QR', icon: '🔗' },
  { label: 'Instalación', icon: '🏗️' },
  { label: 'Web', icon: '💻' },
  { label: 'Evento', icon: '🎉' },
];

const Solution = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-green-50 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-4xl font-space-grotesk font-bold text-center text-green-700 mb-8"
    >
      ¿Qué es un <span className="text-green-500">Ringlete</span>?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-lg md:text-2xl font-outfit text-center text-gray-800 max-w-2xl mb-8"
    >
      Un Ringlete es una experiencia interactiva que mezcla arte, tecnología y juego para comunicar de forma memorable. Se adapta a múltiples formatos:
    </motion.p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
      {formats.map(f => (
        <motion.div
          key={f.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-6 min-w-[120px] min-h-[120px]"
        >
          <span className="text-4xl mb-2">{f.icon}</span>
          <span className="font-space-grotesk text-green-700 font-bold text-lg">{f.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Solution; 