import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Project = () => {
  const [iframeSrc, setIframeSrc] = useState(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const handleHover = () => {
    gsap.to(cursorRef.current, {
      scale: 1.5,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 0.9,
      ease: 'power3.out',
    });
  };

  const handleIframeLoadError = () => {
    alert('Unable to load project preview. Please visit the site directly.');
    setIframeSrc(null);
  };

  const handleProjectClick = (link) => {
    setIframeSrc(link);
  };

  const projects = [
    { name: 'eraser.io Clone', link: 'https://eraser.io' },
    { name: 'Beauty Heaven', link: 'https://beauty-heaven-frontend.onrender.com/' },
    { name: 'Airbnb Clone', link: 'https://airbnb.com' },
  ];

  return (
    <div className="w-full px-5 sm:px-5 md:px-20 py-5 h-auto bg-[#cdea68] relative rounded-t-3xl">
      <div className="border-b border-zinc-700">
        <p className="text-[5vw] font-textFont tracking-tighter">Projects.</p>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-50"
        style={{ mixBlendMode: 'difference' }}
      />

      <div className="flex flex-col px-2 pt-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border-b flex justify-between items-center py-4"
            onMouseMove={handleHover}
            onMouseLeave={handleLeave}
            onClick={() => handleProjectClick(project.link)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-[5vw] cursor-pointer">{project.name}</h1>
            <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black cursor-pointer">
              <i
                className="fa fa-arrow-up text-white rotate-45 text-2xl"
                aria-hidden="true"
              ></i>
            </div>
          </motion.div>
        ))}
      </div>

      {iframeSrc && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center">
          <div className="w-[90%] h-[80%] bg-white p-4 relative">
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              aria-label="Close preview"
              onClick={() => setIframeSrc(null)}
            >
              &times;
            </button>
            <iframe
              src={iframeSrc}
              title="Project Preview"
              className="w-full h-full"
              onError={handleIframeLoadError}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
