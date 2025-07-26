import { useEffect, useState, useRef } from 'react';
import ringleteWhite from '../icon_ringlete_WHI.webp';
import ringleteOrange from '../icon_ringlete_ORG.webp';
import ringleteBlue from '../icon_ringlete_BLU.webp';
import ringleteYellow from '../icon_ringlete_YEL.webp';
import ringletePurple from '../icon_ringlete_PUR.webp';
import ringletePink from '../icon_ringlete_PINK.webp';

const ANIMATION_DURATION = 60; // seconds
const NUDGE_FACTOR = 0.3; // 30% nudge

export interface RingleteProps {
  initialWhiteRotation?: number;
  // Removed spinTrigger
}

export const Ringlete = ({ initialWhiteRotation = 0 }: RingleteProps) => {
  // Timeline for animation
  const [timeline, setTimeline] = useState(0);
  const [whiteRotation, setWhiteRotation] = useState(initialWhiteRotation);
  const startTime = useRef<number | null>(null);
  const initialRotationRef = useRef(initialWhiteRotation);

  // Mouse influence state (desktop only)
  const mouseTarget = useRef({ x: 0, y: 0 });

  // Smooth lerp state for nudge
  const [nudge, setNudge] = useState({ x: 0, y: 0 });

  // Animation progress for scale
  const t = (timeline % ANIMATION_DURATION) / ANIMATION_DURATION;
  const eased = 0.5 - 0.5 * Math.cos(Math.PI * 2 * t); // ease in-out

  // Rotation progress (linear, never reverses)
  const globalProgress = (timeline / ANIMATION_DURATION);

  // Pink
  const pinkMin = 301;
  const pinkMax = 2000;
  const pinkBase = Math.round(pinkMin + (pinkMax - pinkMin) * eased);
  const pinkNudge = nudge.y * NUDGE_FACTOR * (pinkMax - pinkMin);
  const pinkSize = Math.round(pinkBase + pinkNudge);
  const pinkRotation = -180 * globalProgress;
  // Purple
  const purpleMin = 301;
  const purpleMax = 1500;
  const purpleBase = Math.round(purpleMin + (purpleMax - purpleMin) * eased);
  const purpleNudge = nudge.y * NUDGE_FACTOR * (purpleMax - purpleMin);
  const purpleSize = Math.round(purpleBase + purpleNudge);
  const purpleBaseRotation = -225 * globalProgress;
  const purpleRotationRange = -225; // full rotation range (negative for CCW)
  // X axis nudge: speed up (more negative) or slow down (less negative), never reverse
  const purpleRotationNudge = -Math.abs(nudge.x) * NUDGE_FACTOR * Math.abs(purpleRotationRange) * (nudge.x >= 0 ? 1 : -1);
  const purpleRotation = purpleBaseRotation + purpleRotationNudge;
  // Yellow
  const yellowMin = 301;
  const yellowMax = 1000;
  const yellowBase = Math.round(yellowMin + (yellowMax - yellowMin) * eased);
  const yellowNudge = nudge.y * NUDGE_FACTOR * (yellowMax - yellowMin);
  const yellowSize = Math.round(yellowBase + yellowNudge);
  const yellowBaseRotation = -270 * globalProgress;
  const yellowRotationRange = -270;
  const yellowRotationNudge = -Math.abs(nudge.x) * NUDGE_FACTOR * Math.abs(yellowRotationRange) * (nudge.x >= 0 ? 1 : -1);
  const yellowRotation = yellowBaseRotation + yellowRotationNudge;
  // Blue
  const blueMin = 301;
  const blueMax = 700;
  const blueBase = Math.round(blueMin + (blueMax - blueMin) * eased);
  const blueNudge = nudge.x * NUDGE_FACTOR * (blueMax - blueMin);
  const blueSize = Math.round(blueBase + blueNudge);
  const blueBaseRotation = -135 * globalProgress;
  const blueRotationRange = -135;
  const blueRotationNudge = -Math.abs(nudge.y) * NUDGE_FACTOR * Math.abs(blueRotationRange) * (nudge.y >= 0 ? 1 : -1);
  const blueRotation = blueBaseRotation + blueRotationNudge;
  // Orange
  const orangeMin = 301;
  const orangeMax = 400;
  const orangeBase = Math.round(orangeMin + (orangeMax - orangeMin) * eased);
  const orangeNudge = nudge.x * NUDGE_FACTOR * (orangeMax - orangeMin);
  const orangeSize = Math.round(orangeBase + orangeNudge);
  const orangeBaseRotation = -90 * globalProgress;
  const orangeRotationRange = -90;
  const orangeRotationNudge = -Math.abs(nudge.y) * NUDGE_FACTOR * Math.abs(orangeRotationRange) * (nudge.y >= 0 ? 1 : -1);
  const orangeRotation = orangeBaseRotation + orangeRotationNudge;

  // Restore animation frame effect for timeline and whiteRotation
  useEffect(() => {
    let frame: number;
    const start = Date.now();
    startTime.current = start;
    const animateTimeline = () => {
      const elapsed = ((Date.now() - start) / 1000) % ANIMATION_DURATION;
      setTimeline(elapsed);
      // White layer: -180deg per 30s, counter-clockwise, perpetual
      // Use initialWhiteRotation as the starting offset
      const baseRotation = initialRotationRef.current;
      setWhiteRotation(baseRotation + (-720 * ((Date.now() - start) / 1000 / ANIMATION_DURATION)));
      frame = requestAnimationFrame(animateTimeline);
    };
    frame = requestAnimationFrame(animateTimeline);
    return () => cancelAnimationFrame(frame);
  }, [initialWhiteRotation]);

  // Mouse move handler (desktop only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Normalize to -1 (left/top) to 1 (right/bottom)
      const x = ((e.clientX / w) - 0.5) * 2;
      const y = ((e.clientY / h) - 0.5) * 2;
      mouseTarget.current = { x, y };
    };
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Lerp nudge toward mouseTarget (springy)
  useEffect(() => {
    let frame: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      setNudge(prev => {
        return {
          x: lerp(prev.x, mouseTarget.current.x, 0.08),
          y: lerp(prev.y, mouseTarget.current.y, 0.08),
        };
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Compute the largest layer size for the drag area
  const logoSize = Math.max(pinkSize, purpleSize, yellowSize, blueSize, orangeSize, 300);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" style={{ touchAction: 'none' }}>
      {/* Animated logo group, now static and non-draggable */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: logoSize,
          height: logoSize,
          transform: `translate(-50%, -50%)`,
          transition: 'none',
        }}
      >
        {/* Pink animated layer */}
        <img
          src={ringletePink}
          alt="pink ringlete"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: pinkSize,
            height: pinkSize,
            transform: `translate(-50%, -50%) rotate(${pinkRotation}deg)`,
            zIndex: 0,
            opacity: 1,
            mixBlendMode: 'difference',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
        {/* Purple animated layer */}
        <img
          src={ringletePurple}
          alt="purple ringlete"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: purpleSize,
            height: purpleSize,
            transform: `translate(-50%, -50%) rotate(${purpleRotation}deg)`,
            zIndex: 1,
            opacity: 1,
            mixBlendMode: 'difference',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
        {/* Yellow animated layer */}
        <img
          src={ringleteYellow}
          alt="yellow ringlete"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: yellowSize,
            height: yellowSize,
            transform: `translate(-50%, -50%) rotate(${yellowRotation}deg)`,
            zIndex: 2,
            opacity: 1,
            mixBlendMode: 'difference',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
        {/* Blue animated layer */}
        <img
          src={ringleteBlue}
          alt="blue ringlete"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: blueSize,
            height: blueSize,
            transform: `translate(-50%, -50%) rotate(${blueRotation}deg)`,
            zIndex: 3,
            opacity: 1,
            mixBlendMode: 'difference',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
        {/* Orange animated layer */}
        <img
          src={ringleteOrange}
          alt="orange ringlete"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: orangeSize,
            height: orangeSize,
            transform: `translate(-50%, -50%) rotate(${orangeRotation}deg)`,
            zIndex: 4,
            opacity: 1,
            mixBlendMode: 'difference',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
        {/* White animated layer (no longer the only drag handle) */}
        <img
          src={ringleteWhite}
          alt="white ringlete"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 300,
            height: 300,
            transform: `translate(-50%, -50%) rotate(${whiteRotation}deg)`,
            zIndex: 10,
            opacity: 1,
            mixBlendMode: 'normal',
            pointerEvents: 'none',
            touchAction: 'none',
          }}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Ringlete; 