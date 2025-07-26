import { motion } from 'framer-motion';

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center gap-8"
    >
      {/* Logo placeholder */}
      <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
        <span className="text-white text-4xl font-space-grotesk font-bold">LOGO</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-space-grotesk font-bold text-center text-gray-900 leading-tight">
        Ringlete Interactivo:<br />
        <span className="text-green-500">Juega. Comunica. Aprende.</span>
      </h1>
    </motion.div>
  </section>
);

export default Hero; 