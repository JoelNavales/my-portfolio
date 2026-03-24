import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return null;
  }

  return (
    <div className="hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-100 mix-blend-screen shadow-[0_0_10px_rgba(141,255,105,1)]"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-primary pointer-events-none z-99 flex items-center justify-center transition-all"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          translateX: isHovering ? -40 : -20,
          translateY: isHovering ? -40 : -20,
          backgroundColor: isHovering ? 'rgba(141, 255, 105, 0.05)' : 'transparent',
          backdropFilter: isHovering ? 'blur(4px)' : 'none',
          boxShadow: isHovering ? 'inset 0 0 15px rgba(141, 255, 105, 0.2)' : 'none',
        }}
      />
    </div>
  );
};

export default CustomCursor;
