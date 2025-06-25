import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-colors backdrop-blur-sm";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <motion.input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formState.name}
          onChange={handleChange}
          className={inputClasses}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        />
      </div>

      <div>
        <motion.input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formState.email}
          onChange={handleChange}
          className={inputClasses}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        />
      </div>

      <div>
        <motion.textarea
          name="message"
          placeholder="Tu mensaje"
          value={formState.message}
          onChange={handleChange}
          rows={4}
          className={`${inputClasses} resize-none`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        />
      </div>

      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white font-outfit font-medium py-3 px-6 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300 relative overflow-hidden group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Enviar Mensaje</span>
        <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.button>
    </motion.form>
  );
};

export default ContactForm; 