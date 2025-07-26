import { motion } from 'framer-motion';

const roadmap = [
  { year: '2024', milestone: 'Lanzamiento MVP y primeras experiencias' },
  { year: '2025', milestone: 'Expansión LATAM y nuevos formatos' },
  { year: '2026', milestone: 'Plataforma SaaS y alianzas estratégicas' },
  { year: '2027', milestone: 'Escalamiento global' },
];

const Roadmap = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-4xl font-space-grotesk font-bold text-center text-green-700 mb-8"
    >
      Roadmap
    </motion.h2>
    <div className="flex flex-col gap-8 max-w-2xl w-full mx-auto relative">
      {roadmap.map((item, idx) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-6"
        >
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-green-500 rounded-full mb-2" />
            {idx < roadmap.length - 1 && <div className="w-1 h-16 bg-green-200" />}
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow w-full">
            <span className="font-space-grotesk text-green-700 font-bold text-lg">{item.year}</span>
            <p className="font-outfit text-gray-800 text-base mt-1">{item.milestone}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Roadmap; 