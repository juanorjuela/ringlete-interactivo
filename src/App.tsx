import { useState } from 'react';
import '@fontsource/space-grotesk';
import '@fontsource/outfit';
import { createPortal } from 'react-dom';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';

import Ringlete from './components/Ringlete';
import AboutOverlay from './components/AboutOverlay';
import ProjectsOverlay from './components/ProjectsOverlay';
import ContactOverlay from './components/ContactOverlay';
import PitchPage from './pages/PitchPage';

const NAV_BUTTONS = [
  { label: 'ABOUT US', view: 'about' },
  { label: 'PROJECTS', view: 'projects' },
  { label: 'CONTACT', view: 'contact' },
  { label: 'PITCH', view: 'pitch' },
];

type NavButton = { label: string; view: string };
type UIOverlayProps = {
  setView: React.Dispatch<React.SetStateAction<'home' | 'about' | 'projects' | 'contact' | 'pitch'>>;
  NAV_BUTTONS: NavButton[];
  currentView: 'home' | 'about' | 'projects' | 'contact' | 'pitch';
};

// Overlay component for UI elements rendered in a portal
function UIOverlay({ setView, NAV_BUTTONS, currentView }: UIOverlayProps) {
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
            fontSize: 44,
            lineHeight: 0.6,
            letterSpacing: '0.1em',
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
          bottom: '5%',
          zIndex: 99999,
          mixBlendMode: 'difference',
          opacity: 1,
          pointerEvents: 'auto',
          width: '100%',
          paddingLeft: 0,
        }}
      >
        {NAV_BUTTONS.map((btn: NavButton, idx: number) => {
          const isActive = currentView === btn.view;
          return (
            <Link
              key={btn.view}
              to={btn.view === 'home' ? '/' : `/${btn.view}`}
              style={{ textDecoration: 'none', width: '100%' }}
              onClick={() => setView(btn.view as any)}
            >
              <button
                className="bg-white text-black font-bold text-left shadow-lg tracking-widest border-2 border-black rounded-none font-[Forced SQUARE] transition-all"
                style={{
                  fontFamily: 'Forced SQUARE',
                  letterSpacing: '0.3em',
                  minWidth: 180,
                  maxWidth: 250,
                  minHeight: 40,
                  maxHeight: 40,
                  width: '100%',
                  fontSize: 18,
                  padding: '0 1em',
                  display: 'block',
                  marginTop: 10,
                  border: 'none',
                  textAlign: 'left',
                  background: (hoveredIdx === idx || isActive) ? hoverColor : 'white',
                  color: (hoveredIdx === idx || isActive) ? 'white' : 'black',
                  mixBlendMode: 'difference',
                  opacity: 1,
                }}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  setHoverColor(getRandomColor());
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                type="button"
              >
                {btn.label}
              </button>
            </Link>
          );
        })}
      </div>
    </>,
    overlayRoot
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  // Add spin trigger state
  // Removed const [spinTrigger, setSpinTrigger] = useState(0);

  // Detect overlay route
  const isOverlay = ['/about', '/projects', '/contact'].includes(location.pathname);
  const isPitchPage = location.pathname === '/pitch';

  // Render only the homepage, no loader
  return (
    <>
      {isPitchPage ? (
        <Routes location={location}>
          <Route path="/pitch" element={<PitchPage />} />
        </Routes>
      ) : (
        <>
          <UIOverlay
            setView={view => {
              if (view === 'home') navigate('/');
              else navigate(`/${view}`);
            }}
            NAV_BUTTONS={NAV_BUTTONS}
            currentView={
              location.pathname === '/about' ? 'about' :
              location.pathname === '/projects' ? 'projects' :
              location.pathname === '/contact' ? 'contact' :
              location.pathname === '/pitch' ? 'pitch' :
              'home'
            }
          />
          <div className="w-screen h-screen bg-black overflow-hidden flex items-center justify-center relative">
            {/* Animated ringlete background always visible */}
            <div className="absolute inset-0 flex items-center justify-center z-[-2] pointer-events-none">
              <Ringlete initialWhiteRotation={0} />
            </div>
            {/* Rutas principales */}
            <Routes location={location}>
              <Route path="/" element={null} />
              <Route path="/about" element={null} />
              <Route path="/projects" element={null} />
              <Route path="/contact" element={null} />
            </Routes>
            {/* Overlay modal según ruta */}
            {isOverlay && (
              <div className="absolute left-0 right-0 mx-auto z-[9999999] flex flex-col items-center justify-center max-w-[90vw] w-[350px] md:w-[420px]"
                style={{
                  background: 'rgba(0, 0, 0, 0.95)',
                  borderRadius: 0,
                  boxShadow: 'none',
                  border: 'none',
                  zIndex: 99,
                  textAlign: 'center',
                  color: 'white',
                  opacity: 1,
                  transform: 'none',
                  width: '100%',
                  height: '40%',
                  margin: 0,
                  top: '30%',
                  position: 'absolute',
                }}
              >
                {location.pathname === '/about' && <AboutOverlay />}
                {location.pathname === '/projects' && <ProjectsOverlay />}
                {location.pathname === '/contact' && <ContactOverlay />}
                <button
                  className="mt-8 bg-white text-black font-bold font-space-grotesk px-4 py-2 rounded shadow hover:bg-gray-100 transition-all border-2 border-black mx-auto"
                  onClick={() => navigate('/')}
                >
                  ← BACK
                </button>
              </div>
            )}
          </div>
        </>
      )}
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
