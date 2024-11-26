import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const Contact = () => {
  const formRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    gsap.to(formRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: 'power3.out',
      onComplete: () => {
        gsap.to(formRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        });
      }
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        key="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
          <motion.h1
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We’d love to hear from you! Fill out the form below to get started.
          </motion.p>

          <form
            ref={formRef}
            className="w-full max-w-lg p-8 space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full mt-2 p-3 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full mt-2 p-3 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full mt-2 p-3 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-300 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          {formSubmitted && (
            <motion.div
              className="mt-6 text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p>Your message has been sent successfully!</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
