import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={targetRef} id="home" className="relative h-[150vh] md:h-[200vh] bg-[#020202] z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
         {/* Background glow and geometric shapes */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.08] blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
         
         <motion.div 
            style={{ y: yText, opacity: opacityText }} 
            className="flex flex-col items-center justify-center z-10 w-full"
         >
            <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] font-black uppercase text-center tracking-tighter mix-blend-screen z-20 whitespace-nowrap overflow-visible w-full md:w-[150%]">
               <span className="text-white relative z-10 drop-shadow-2xl">JOEL</span><span className="text-transparent text-stroke italic px-4">NAVALES</span><br/>
               <span className="text-[var(--color-primary)] text-glow md:text-shadow-none md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-[var(--color-primary)] to-[#5bc92e]">CREATIVE</span><span className="text-white relative z-10 drop-shadow-2xl"> DEV</span>
            </h1>
            
            <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl px-8 md:px-12 mt-12 md:mt-24 text-xs md:text-sm font-mono text-gray-500 gap-6 md:gap-0">
               <div className="flex flex-col gap-1 intro-slide-up" style={{ animationDelay: '0.2s' }}>
                 <span>AVAILABLE FOR WORK //</span>
                 <span className="text-white font-bold tracking-widest">FRONTEND EXPERT</span>
               </div>
               <div className="flex flex-col gap-1 md:text-right intro-slide-up" style={{ animationDelay: '0.4s' }}>
                 <span>BASED IN //</span>
                 <span className="text-white font-bold tracking-widest">GLOBAL WEB</span>
               </div>
            </div>
         </motion.div>
         {/* Decorative grid */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)', backgroundSize: '10vw 10vw' }}></div>
      </div>

      <style>{`
        .text-stroke {
           -webkit-text-stroke: 1.5px var(--color-primary);
           color: transparent;
        }
        @keyframes slideUp {
           from { opacity: 0; transform: translateY(20px); }
           to { opacity: 1; transform: translateY(0); }
        }
        .intro-slide-up {
           opacity: 0;
           animation: slideUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
