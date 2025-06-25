import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

// Configuration for each Ringlete logo layer
const RINGLETE_LAYERS = [
  { id: 'white', maxSize: 300, rotation: 90, color: '#FFFFFF' },
  { id: 'orange', maxSize: 500, rotation: 45, color: '#FF6B00' },
  { id: 'blue', maxSize: 700, rotation: 135, color: '#0066FF' },
  { id: 'yellow', maxSize: 900, rotation: 270, color: '#FFD600' },
  { id: 'purple', maxSize: 1100, rotation: 225, color: '#9C27B0' },
  { id: 'pink', maxSize: 1200, rotation: 180, color: '#FF4081' },
];

const BASE_SIZE = 300;
const ANIMATION_DURATION = 60; // 60 seconds for mobile animation

export const Ringlete = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle mouse movement for desktop
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center (-1 to 1)
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Start mobile animation
  useEffect(() => {
    if (!isMobile || isAnimating) return;

    setIsAnimating(true);
    RINGLETE_LAYERS.forEach((layer) => {
      animate(
        `[data-ringlete-layer="${layer.id}"]`,
        {
          scale: layer.maxSize / BASE_SIZE,
          rotate: layer.rotation,
        },
        {
          duration: ANIMATION_DURATION,
          ease: 'linear',
        }
      );
    });
  }, [isMobile, isAnimating]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
    >
      {RINGLETE_LAYERS.map((layer, index) => {
        // For desktop, transform size and rotation based on mouse position
        const scale = useTransform(
          mouseX,
          [-1, 0, 1],
          [layer.maxSize / BASE_SIZE, 1, layer.maxSize / BASE_SIZE]
        );
        
        const rotate = useTransform(
          mouseX,
          [-1, 0, 1],
          [layer.rotation, 0, layer.rotation]
        );

        return (
          <motion.svg
            key={layer.id}
            data-ringlete-layer={layer.id}
            viewBox="0 0 300 300"
            className="absolute w-[300px] h-[300px]"
            style={{
              scale: isMobile ? 1 : scale,
              rotate: isMobile ? 0 : rotate,
              zIndex: RINGLETE_LAYERS.length - index,
            }}
            initial={{ scale: 1, rotate: 0 }}
          >
            <path
              d="M150 50 A100 100 0 1 0 150 250 A100 100 0 1 0 150 50 Z M150 100 A50 50 0 1 1 150 200 A50 50 0 1 1 150 100 Z"
              fill={layer.color}
              filter="url(#neonGlow)"
            />
            <defs>
              <filter id="neonGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </motion.svg>
        );
      })}
    </div>
  );
};

export default Ringlete; 