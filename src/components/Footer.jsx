import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the footer on render
    gsap.fromTo(
      footerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className=" text-gray-300 py-2 px-4 flex flex-col items-center justify-center space-y-6"
    >
      <motion.div
        className="flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition"
        >
          {/* https://www.codechef.com/users/cuttam9892 */}
          <motion.i
            className="fab fa-codechef text-2xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          ></motion.i>
        </a>
        <a
          href="https://x.com/UttamSutharP"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition"
        >
          <motion.i
            className="fab fa-twitter text-2xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          ></motion.i>
        </a>
        <a
          href="https://github.com/uttamchouhan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition"
        >
          <motion.i
            className="fab fa-github text-2xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          ></motion.i>
        </a>
        <a
          href="https://www.linkedin.com/in/uttam-chouhan-6a14b827b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition"
        >
          <motion.i
            className="fab fa-linkedin-in text-2xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          ></motion.i>
        </a>
      </motion.div>
      <motion.p
        className="text-sm text-gray-500"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
