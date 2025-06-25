import { useState, useEffect } from 'react';
import '@fontsource/space-grotesk';
import '@fontsource/outfit';

import Ringlete from './components/Ringlete';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed top-[10px] left-[10px] z-[999999] text-left">
        <h1 className="text-3xl font-bold mb-1 font-space-grotesk">Ringlete Interactivo</h1>
        <h2 className="text-xl font-outfit">Comunicate Jugando</h2>
      </div>
      <Ringlete />
    </div>
  );
}

export default App;
