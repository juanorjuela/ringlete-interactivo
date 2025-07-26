import { motion } from 'framer-motion';

const values = [
  { title: 'Experiencia', desc: 'Interacciones memorables y participativas.' },
  { title: 'Recordación', desc: 'Las marcas se quedan en la mente del usuario.' },
  { title: 'Medición', desc: 'Resultados y datos en tiempo real.' },
  { title: 'Arte + Tecnología', desc: 'Creatividad y vanguardia en cada proyecto.' },
];

const Value = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-4xl font-space-grotesk font-bold text-center text-green-700 mb-8"
    >
      Propuesta de <span className="text-green-500">valor</span>
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
      {values.map(v => (
        <motion.div
          key={v.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="bg-green-50 rounded-xl p-8 shadow flex flex-col items-center"
        >
          <h3 className="font-space-grotesk text-xl text-green-700 font-bold mb-2">{v.title}</h3>
          <p className="font-outfit text-gray-800 text-center">{v.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Value; 