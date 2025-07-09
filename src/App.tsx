import { useState } from 'react';
import '@fontsource/space-grotesk';
import '@fontsource/outfit';
import { createPortal } from 'react-dom';

import Ringlete from './components/Ringlete';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_BUTTONS = [
  { label: 'ABOUT US', view: 'about' },
  { label: 'PROJECTS', view: 'projects' },
  { label: 'CONTACT', view: 'contact' },
];

type NavButton = { label: string; view: string };
type UIOverlayProps = {
  setView: React.Dispatch<React.SetStateAction<'home' | 'about' | 'projects' | 'contact'>>;
  NAV_BUTTONS: NavButton[];
};

// Overlay component for UI elements rendered in a portal
function UIOverlay({ setView, NAV_BUTTONS }: UIOverlayProps) {
  const overlayRoot = typeof window !== 'undefined' ? document.getElementById('ui-overlay-root') : null;
  // Add state for hovered button and color
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [hoverColor, setHoverColor] = useState<string>('#fff');

  // Helper to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  if (!overlayRoot) return null;
  return createPortal(
    <>
      {/* Top-left logo and social (always on top, outside main container) */}
      <div className="absolute top-8 left-8 z-[99999] flex flex-col items-start" style={{ mixBlendMode: 'normal', pointerEvents: 'auto', margin: '0 5%' }}>
        <h1
          className="text-white select-none"
          style={{
            fontFamily: 'Forced SQUARE',
            fontWeight: 900,
            fontSize: 64,
            lineHeight: 0.6,
            letterSpacing: '0.04em',
            color: 'white',
            zIndex: 99999,
            mixBlendMode: 'normal',
            opacity: 1,
            marginBottom: 18,
          }}
        >
          RINGLETE<br />
          <span style={{ marginTop: 10, display: 'inline-block' }}>INTERACTIVO</span>
        </h1>
        <div className="flex flex-row items-center gap-4 mt-2"
          style={{
            zIndex: 9,
            mixBlendMode: 'normal',
            opacity: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexWrap: 'nowrap',
            alignContent: 'flex-start',
          }}
        >
          {/* Instagram Icon */}
          <a href="#" aria-label="Instagram" className="text-white hover:opacity-100 transition" style={{ color: 'white', zIndex: 99999, mixBlendMode: 'normal', opacity: 1, fontSize: 32, display: 'flex', alignItems: 'center', margin: '0 10px 0 0', padding: 0 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" fill="none"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" fill="none"/>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" stroke="currentColor"/>
            </svg>
          </a>
          {/* Email Icon */}
          <a href="#" aria-label="Email" className="text-white hover:opacity-100 transition" style={{ color: 'white', zIndex: 99999, mixBlendMode: 'normal', opacity: 1, fontSize: 32, display: 'flex', alignItems: 'center' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2" stroke="currentColor" fill="none"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" fill="none"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Navigation buttons (lower left, bottom 15%) */}
      <div
        className="flex flex-col items-start gap-8"
        style={{
          position: 'absolute',
          left: 0,
          bottom: '10%',
          zIndex: 99999,
          mixBlendMode: 'normal',
          opacity: 1,
          pointerEvents: 'auto',
          width: '100%',
          paddingLeft: 0,
        }}
      >
        {NAV_BUTTONS.map((btn: NavButton, idx: number) => (
          <button
            key={btn.view}
            className="bg-white text-black font-bold text-left shadow-lg tracking-widest border-2 border-black rounded-none font-[Forced SQUARE] transition-all"
            style={{
              fontFamily: 'Forced SQUARE',
              letterSpacing: '0.3em',
              minWidth: 180,
              maxWidth: 250,
              minHeight: 50,
              maxHeight: 50,
              width: '100%',
              fontSize: 20,
              padding: '0.75em 2em',
              display: 'block',
              marginTop: 10,
              border: 'none',
              textAlign: 'left',
              background: hoveredIdx === idx ? hoverColor : 'white',
              color: hoveredIdx === idx ? 'white' : 'black',
              mixBlendMode: 'difference',
              opacity: 1,
            }}
            onMouseEnter={() => {
              setHoveredIdx(idx);
              setHoverColor(getRandomColor());
            }}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => setView(btn.view as any)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </>,
    overlayRoot
  );
}

function App() {
  const [view, setView] = useState<'home' | 'about' | 'projects' | 'contact'>('home');
  const [initialWhiteRotation] = useState<number>(0);

  // Card content for About/Projects/Contact
  const renderCardContent = () => {
    switch (view) {
      case 'about':
        return (
          <>
            <motion.h2 layoutId="nav-about" className="font-space-grotesk text-lg md:text-xl font-bold tracking-widest bg-white text-black px-4 py-2 mb-4 w-fit">ABOUT US</motion.h2>
            <p className="font-outfit text-white/90 text-base md:text-lg max-w-xs md:max-w-md mb-8">
              Ringlete crea experiencias interactivas que comunican jugando, mezclando arte, tecnología y emoción en soluciones digitales y físicas.
            </p>
            <div className="flex flex-col gap-2 w-full">
              <button className="bg-white text-black font-bold px-4 py-2 w-full text-left">NUESTRA EQUIPO</button>
              <button className="bg-white text-black font-bold px-4 py-2 w-full text-left">PORTAFOLIO</button>
            </div>
          </>
        );
      case 'projects':
        return (
          <>
            <motion.h2 layoutId="nav-projects" className="font-space-grotesk text-lg md:text-xl font-bold tracking-widest bg-white text-black px-4 py-2 mb-4 w-fit">PROJECTS</motion.h2>
            <p className="font-outfit text-white/90 text-base md:text-lg max-w-xs md:max-w-md mb-8">
              Aquí irá el portafolio de proyectos destacados de Ringlete Interactivo.
            </p>
            <div className="flex flex-col gap-2 w-full">
              <button className="bg-white text-black font-bold px-4 py-2 w-full text-left">PORTAFOLIO</button>
            </div>
          </>
        );
      case 'contact':
        return (
          <>
            <motion.h2 layoutId="nav-contact" className="font-space-grotesk text-lg md:text-xl font-bold tracking-widest bg-white text-black px-4 py-2 mb-4 w-fit">CONTACT</motion.h2>
            <p className="font-outfit text-white/90 text-base md:text-lg max-w-xs md:max-w-md mb-8">
              ¿Quieres colaborar o tienes una idea? ¡Contáctanos!
            </p>
            <div className="flex flex-col gap-2 w-full">
              <button className="bg-white text-black font-bold px-4 py-2 w-full text-left">ENVIAR MENSAJE</button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // Render only the homepage, no loader
  return (
    <>
      <UIOverlay setView={setView} NAV_BUTTONS={NAV_BUTTONS} />
      {/* Main app container with animation and cards */}
      <div className="w-screen h-screen bg-black overflow-hidden flex items-center justify-center relative">
        {/* Animated ringlete background */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <Ringlete initialWhiteRotation={initialWhiteRotation} />
        </div>
        {/* Floating card for About/Projects/Contact */}
        <AnimatePresence>
          {view !== 'home' && (
            <motion.div
              key={view}
              className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 z-30 bg-black/80 border border-white/20 rounded-xl shadow-2xl p-8 md:p-12 flex flex-col items-start max-w-[90vw] w-[350px] md:w-[420px] backdrop-blur-lg"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              {renderCardContent()}
              <button
                className="mt-8 bg-white text-black font-bold font-space-grotesk px-4 py-2 rounded shadow hover:bg-gray-100 transition-all border-2 border-black"
                onClick={() => setView('home')}
              >
                ← BACK
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Copyright footer (bottom center) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[99999] w-full flex justify-center pointer-events-none" style={{ mixBlendMode: 'normal' }}>
        <span className="text-white text-xs opacity-60 font-[Forced SQUARE] select-none" style={{ fontFamily: 'Forced SQUARE', letterSpacing: '0.04em' }}>
          © Ringlete Interactivo all rights reserved
        </span>
      </div>
    </>
  );
}

export default App;
