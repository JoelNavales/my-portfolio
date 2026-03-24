import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingOrbNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'INDEX', href: '#home', number: '01' },
    { name: 'EXPERTISE', href: '#about', number: '02' },
    { name: 'WORKS', href: '#projects', number: '03' },
    { name: 'CONTACT', href: '#contact', number: '04' },
  ];

  return (
    <>
      {/* Floating Interactive Orb */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 md:top-12 md:right-12 z-[110] w-16 h-16 rounded-full flex flex-col items-center justify-center transition-all duration-500 overflow-hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, boxShadow: isOpen ? '0 0 0px transparent' : '0 0 30px rgba(141,255,105,0.2)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-md rounded-full border ${isOpen ? 'border-gray-800' : 'border-[var(--color-primary)]'}`}></div>
        
        {/* Animated Hamburger/Close lines */}
        <div className="relative w-6 h-5 z-10">
          <motion.span 
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }} 
            className={`absolute top-0 left-0 w-full h-0.5 rounded-full ${isOpen ? 'bg-white' : 'bg-[var(--color-primary)]'}`}
          />
          <motion.span 
            animate={{ opacity: isOpen ? 0 : 1 }} 
            className="absolute top-[10px] left-0 w-full h-0.5 bg-[var(--color-primary)] rounded-full"
          />
          <motion.span 
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }} 
            className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${isOpen ? 'bg-white' : 'bg-[var(--color-primary)]'}`}
          />
        </div>
      </motion.button>

      {/* Full Screen Cinematic Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 4rem) 4rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 4rem) 4rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 4rem) 4rem)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[105] bg-[#050505] flex flex-col justify-center items-center"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent pointer-events-none mix-blend-screen"></div>
            
            {/* Geometric Grid lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

            <nav className="flex flex-col gap-6 md:gap-10 w-full max-w-5xl px-8 z-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -50, rotateX: 90 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  className="group flex flex-col md:flex-row items-start md:items-baseline md:gap-8 hover-glow"
                >
                  <span className="text-sm md:text-xl font-bold text-[var(--color-primary)] font-mono mb-2 md:mb-0 opacity-80">{link.number}</span>
                  <span className="text-6xl md:text-8xl lg:text-[10rem] leading-none font-black text-gray-900 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter mix-blend-screen">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               className="absolute bottom-12 left-8 md:left-24 text-gray-500 text-sm font-mono flex flex-col md:flex-row md:items-center gap-4 md:gap-12"
            >
                <div className="flex gap-8">
                    <a href="https://github.com/joelnavales" target="_blank" rel="noreferrer" className="hover:text-[var(--color-primary)] transition-colors">GITHUB</a>
                    <a href="https://linkedin.com/in/joelnavales" target="_blank" rel="noreferrer" className="hover:text-[var(--color-primary)] transition-colors">LINKEDIN</a>
                </div>
                <div className="hidden md:block w-12 h-px bg-gray-800"></div>
                <span>joelnavales@portfolio.design</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingOrbNav;
