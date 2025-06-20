import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fontsource/space-grotesk';
import '@fontsource/outfit';

import Ringlete from './components/Ringlete';
import Loader from './components/Loader';
import ContactForm from './components/ContactForm';

// Placeholder data
const TEAM_MEMBERS = [
  { name: 'John Doe', role: 'CEO', image: 'https://via.placeholder.com/150' },
  { name: 'Jane Smith', role: 'Creative Director', image: 'https://via.placeholder.com/150' },
  { name: 'Mike Johnson', role: 'Lead Developer', image: 'https://via.placeholder.com/150' },
  { name: 'Sarah Williams', role: 'Designer', image: 'https://via.placeholder.com/150' },
  { name: 'Tom Brown', role: 'Marketing', image: 'https://via.placeholder.com/150' },
  { name: 'Lisa Davis', role: 'Content Creator', image: 'https://via.placeholder.com/150' },
];

const PROJECTS = [
  { title: 'Project 1', description: 'Amazing project description', image: 'https://via.placeholder.com/400x300' },
  { title: 'Project 2', description: 'Incredible project description', image: 'https://via.placeholder.com/400x300' },
  { title: 'Project 3', description: 'Fantastic project description', image: 'https://via.placeholder.com/400x300' },
  { title: 'Project 4', description: 'Outstanding project description', image: 'https://via.placeholder.com/400x300' },
];

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.3
      }
    }
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center space-y-6"
          >
            <h1 className="text-6xl font-space-grotesk font-bold bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent">
              Ringlete Interactivo
            </h1>
            <p className="text-xl font-outfit text-white/80 max-w-2xl mx-auto">
              Transformando ideas en experiencias digitales únicas y memorables.
              Donde la creatividad se encuentra con la tecnología.
            </p>
          </motion.div>
        );

      case 'about':
        return (
          <motion.div
            key="about"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-space-grotesk text-white mb-8 text-center">Quiénes Somos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg p-4 backdrop-blur-sm"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-outfit text-white">{member.name}</h3>
                  <p className="text-white/60">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'services':
        return (
          <motion.div
            key="services"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-space-grotesk text-white mb-8">Qué Hacemos</h2>
            <div className="aspect-video w-full bg-white/5 rounded-lg mb-8">
              {/* Placeholder for video reel */}
              <div className="w-full h-full flex items-center justify-center text-white/40">
                Video Reel Placeholder
              </div>
            </div>
            <p className="text-xl font-outfit text-white/80">
              Creamos experiencias digitales únicas que combinan diseño innovador,
              tecnología de vanguardia y estrategias creativas para impulsar tu marca.
            </p>
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div
            key="projects"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-space-grotesk text-white mb-8 text-center">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-outfit text-white mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            key="contact"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-space-grotesk text-white mb-8 text-center">Contacto</h2>
            <ContactForm />
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/5 to-neon-pink/10" />
      </div>

      <main className="relative min-h-screen flex flex-col items-center justify-center p-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Ringlete onSectionClick={setCurrentSection} currentSection={currentSection} />
        </div>

        <AnimatePresence mode="wait">
          <div className="relative z-10 w-full">
            {renderContent()}
          </div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
