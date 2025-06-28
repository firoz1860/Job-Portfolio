import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, [role="button"], input, textarea')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, [role="button"], input, textarea')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor pointer-events-none fixed w-8 h-8 rounded-full transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 z-[9999] mix-blend-difference ${
          isHovering 
            ? 'w-16 h-16 bg-purple-400 border-2 border-purple-300' 
            : isClicking 
            ? 'w-6 h-6 bg-cyan-400 border border-cyan-300' 
            : 'border-2 border-purple-500 bg-transparent'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="custom-cursor-trail pointer-events-none fixed w-2 h-2 rounded-full bg-purple-500/60 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 z-[9998]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transitionDelay: '50ms',
        }}
      />
    </>
  );
};

export default CustomCursor;





// import React, { useEffect } from 'react';

// const CustomCursor = () => {
//   useEffect(() => {
//     const cursor = document.querySelector('.custom-cursor');

//     const moveCursor = (e) => {
//       cursor.style.left = `${e.clientX}px`;
//       cursor.style.top = `${e.clientY}px`;
//     };

//     document.addEventListener('mousemove', moveCursor);

//     return () => {
//       document.removeEventListener('mousemove', moveCursor);
//     };
//   }, []);

//   return (
//     <div
//       className="custom-cursor pointer-events-none fixed w-8 h-8 border-2 border-purple-500 rounded-full transition-transform duration-300 transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
//     />
//   );
// };

// export default CustomCursor;
