import React, { useEffect } from 'react';
import CustomCursor from '../components/animations/CustomCursor';
import FloatingOrbNav from '../components/layout/FloatingOrbNav';
import Footer from '../components/layout/Footer';
import BentoSkills from '../components/sections/BentoSkills';
import Skills from '../components/sections/Skills';
import { motion } from 'framer-motion';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#020202] text-white selection:bg-primary/30 selection:text-white">
            <CustomCursor />
            <FloatingOrbNav />
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="pt-32 md:pt-48 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto z-20 relative"
            >
                <div className="w-16 h-1 bg-primary mb-8" />
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 drop-shadow-2xl">
                    About <span className="text-primary text-glow">Me</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed mb-12">
                    I engineer flawless user interfaces that break away from mold-driven templates, focusing on immersive motion, high-performance architecture, and pixel-perfect execution.
                </p>
                <div className="h-px w-full bg-gray-900"></div>
            </motion.div>
            <BentoSkills />
            <Skills />
            <Footer />
        </div>
    );
};

export default AboutPage;
