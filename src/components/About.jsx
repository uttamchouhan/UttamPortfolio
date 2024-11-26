import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (isLargeScreen) {
      const updateGsap = () => {
        gsap.to(container, {
          x: () => -(container.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: '#child',
            start: 'top top',
            end: () => `+=${container.scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        if (textRef.current) {
          const chars = textRef.current.querySelectorAll('.char');
          gsap.fromTo(
            chars,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              scrollTrigger: {
                trigger: '#child',
                start: 'top left',
                end: () => `+=${container.scrollWidth}`,
                scrub: true,
              },
            }
          );
        }
      };

      updateGsap();
    } else {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLargeScreen]);

  const splitText = (text) =>
    text.split('').map((char, index) => (
      <span key={index} className="char">
        {char}
      </span>
    ));

  return (
    <div id="parent" className="my-2 relative w-full pt-20 overflow-hidden">
      <div
        id="child"
        ref={containerRef}
        style={{
          width: isLargeScreen ? `${containerRef.current?.scrollWidth}px` : '100%',
        }}
        className={`flex gap-8 h-full px-5 sm:px-5 md:px-20 ${isLargeScreen ? '' : 'flex-wrap'}`}
      >
        <h1 className="text-[16vw] text-black tracking-tighter shrink-0 font-textFont font-bold uppercase">
          About Me
        </h1>

        <span
          className={`text-[#000] uppercase font-textFont font-bold tracking-tighter ${isLargeScreen?'text-[4vw]':'text-[7vw]'} shrink-0 ${isLargeScreen?'w-screen':'w-full'} leading-[1.2]`}
          ref={textRef}
        >
          I am a passionate{' '}
          <span className="text-indigo-500">
            {isLargeScreen ? splitText('Full Stack Developer'):'Full Stack Developer'}
          </span>{' '}
          with a strong foundation in building scalable web applications. With
          expertise in <span className="text-red-500">JavaScript, React.js, Node.js, and modern frameworks</span>, I
          bring innovative ideas to life through clean and maintainable code.
        </span>
      </div>
    </div>
  );
};

export default About;
