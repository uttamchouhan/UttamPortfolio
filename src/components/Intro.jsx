import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-10 rounded-t-3xl bg-[#004d43]">
            <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex whitespace-nowrap overflow-hidden text-white">
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50,
                    }}
                    className="text-[22vw] leading-none font-headingFont tracking-tighter flex-shrink-0 uppercase pt-10"
                >
                    Welcome to Uttam Chouhan Portfolio A Passionate Full Stack Developer in Java, MERN Stack, and Scalable Solutions!
                </motion.h1>
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50,
                    }}
                    className="text-[22vw] leading-none font-headingFont tracking-tighter flex-shrink-0 uppercase pt-10"
                >
                    Welcome to Uttam Chouhan Portfolio A Passionate Full Stack Developer in Java, MERN Stack, and Scalable Solutions!
                </motion.h1>
            </div>
        </div>
    );
};

export default Intro;
