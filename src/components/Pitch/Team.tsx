import { motion } from 'framer-motion';

const team = [
  { name: 'Ana Torres', role: 'CEO & Fundadora', avatar: '🧑‍💼' },
  { name: 'Luis Pérez', role: 'CTO', avatar: '👨‍💻' },
  { name: 'María Gómez', role: 'Diseño', avatar: '👩‍🎨' },
  { name: 'Carlos Ruiz', role: 'Desarrollo', avatar: '👨‍🔬' },
];

const Team = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-green-50 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-4xl font-space-grotesk font-bold text-center text-green-700 mb-8"
    >
      Nuestro <span className="text-green-500">equipo</span>
    </motion.h2>
    <div className="flex flex-wrap gap-8 justify-center items-center mb-8">
      {team.map(member => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center bg-white rounded-xl shadow p-6 w-40"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mb-4">
            <span>{member.avatar}</span>
          </div>
          <h3 className="font-space-grotesk text-lg text-green-700 font-bold mb-1">{member.name}</h3>
          <p className="font-outfit text-gray-800 text-center text-sm">{member.role}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Team; 