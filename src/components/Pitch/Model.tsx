import { motion } from 'framer-motion';

const items = [
  { title: 'B2B', desc: 'Soluciones para marcas y agencias.' },
  { title: 'Licencias', desc: 'Uso de Ringlete en eventos y campañas.' },
  { title: 'SaaS', desc: 'Plataforma digital para experiencias personalizadas.' },
  { title: 'Consultoría', desc: 'Estrategia y creatividad a medida.' },
];

const Model = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-4xl font-space-grotesk font-bold text-center text-green-700 mb-8"
    >
      Modelo de <span className="text-green-500">negocio</span>
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
      {items.map(i => (
        <motion.div
          key={i.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-green-200 rounded-xl p-8 shadow flex flex-col items-center"
        >
          <h3 className="font-space-grotesk text-xl text-green-700 font-bold mb-2">{i.title}</h3>
          <p className="font-outfit text-gray-800 text-center">{i.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Model; 