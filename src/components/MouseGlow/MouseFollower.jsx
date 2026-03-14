import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './MouseFollower.css';

const MouseFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Use motion values for smooth animation
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring animation for smooth following
  const springConfig = { damping: 20, stiffness: 300, mass: 0.3 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main black circle */}
      <motion.div
        className="mouse-follower"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Inner dot for extra detail (optional) */}
      <motion.div
        className="mouse-follower-dot"
        style={{
          left: cursorX,
          top: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

export default MouseFollower;