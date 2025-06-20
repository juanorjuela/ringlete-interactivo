import { useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

interface RingleteProps {
  onSectionClick: (section: string) => void;
  currentSection: string;
}

const sections = [
  { id: 'home', angle: 0, label: 'Home' },
  { id: 'about', angle: 60, label: 'Quiénes Somos' },
  { id: 'services', angle: 120, label: 'Qué Hacemos' },
  { id: 'projects', angle: 180, label: 'Proyectos' },
  { id: 'allies', angle: 240, label: 'Aliados' },
  { id: 'contact', angle: 300, label: 'Contacto' },
];

export const Ringlete = ({ onSectionClick, currentSection }: RingleteProps) => {
  const controls = useAnimation();
  const ringleteRef = useRef<SVGSVGElement>(null);
  const rotation = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ringleteRef.current) return;
      
      const rect = ringleteRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const degrees = angle * (180 / Math.PI);
      
      controls.start({
        rotate: degrees + 90,
        transition: { type: "spring", stiffness: 100, damping: 30 }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  const handleSectionClick = (sectionId: string) => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.3 }
    });
    onSectionClick(sectionId);
  };

  return (
    <motion.div
      className="w-[400px] h-[400px] relative"
      animate={controls}
      style={{ rotate: rotation }}
    >
      <motion.svg
        ref={ringleteRef}
        viewBox="0 0 800 800"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* SVG path from your original file */}
        <motion.path
          className="stroke-current"
          d="M712.67,313.87l13.56-3.63-205.8-118.82h0s.04-.06.04-.06h0s0,0,0,0l-162.36,43.5-4.39,1.18-1.65-6.16-62.8,108.78-8.3-5.01-7.67-4.63,71.94-124.61-3.63-13.56-76.81,133.03-14.32-8.65-1.64-.99,85.95-148.86-3.63-13.56-90.81,157.29-15.96-9.64,99.95-173.12-3.63-13.56-104.82,181.55-15.96-9.64,113.96-197.38-3.63-13.56-118.82,205.8-.06-.04h0s0,0,0,0l43.5,162.36,1.18,4.39-6.16,1.65,108.78,62.8-9.64,15.96-124.61-71.94-13.56,3.63,133.03,76.81-9.64,15.96-148.86-85.95-13.56,3.63,157.29,90.81-9.64,15.96-173.12-99.95-13.56,3.63,181.55,104.82-9.64,15.96-197.38-113.95-13.56,3.63,205.8,118.82-.04.06h0s0,0,0,0h0s109.46-29.33,109.46-29.33l22.01-5.9,30.89-8.28,4.39-1.18,1.65,6.16,62.8-108.78,9.53,5.75,6.43,3.88-71.94,124.61,3.63,13.56,76.81-133.03,13.1,7.91,2.86,1.73-85.95,148.86,3.63,13.56,90.81-157.29,15.96,9.64-99.95,173.12,3.63,13.56,104.82-181.55,15.96,9.64-113.96,197.38,3.63,13.56,118.82-205.8h0s.06.04.06.04h0s0,0,0,0h0l-43.5-162.36-1.18-4.39,6.16-1.65-108.78-62.8,9.64-15.96,124.61,71.94,13.56-3.63-133.03-76.81,9.64-15.96,148.86,85.95,13.56-3.63-157.29-90.81,9.64-15.96,173.12,99.95,13.56-3.63-181.55-104.82,9.64-15.96,197.38,113.96Z"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        
        {sections.map((section) => (
          <motion.g
            key={section.id}
            transform={`rotate(${section.angle} 400 400)`}
            onClick={() => handleSectionClick(section.id)}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
          >
            <circle
              cx="400"
              cy="200"
              r="30"
              className={`fill-current ${
                currentSection === section.id
                  ? 'text-neon-blue'
                  : 'text-white'
              }`}
            />
            <text
              x="400"
              y="205"
              textAnchor="middle"
              className="text-sm fill-black font-space-grotesk"
            >
              {section.label}
            </text>
          </motion.g>
        ))}
      </motion.svg>
    </motion.div>
  );
};

export default Ringlete; 