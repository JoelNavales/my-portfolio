import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BentoSkills = () => {
   const navigate = useNavigate();
   return (
      <section id="about" className="py-24 md:py-48 px-6 md:px-12 max-w-[1600px] mx-auto z-20 relative bg-[#020202]">
         <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[250px] md:h-[900px]">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.7 }}
               className="md:col-span-2 md:row-span-2 glass-card p-8 md:p-12 flex flex-col justify-end group hover:border-primary/50 transition-colors duration-500 rounded-3xl overflow-hidden relative transform-gpu will-change-transform"
            >
               <div className="absolute inset-0 bg-linear-to-tr from-[#020202] via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none relative z-10">BEYOND <br/><span className="text-primary text-glow">ORDINARY.</span></h2>
               <p className="text-gray-400 md:text-lg max-w-sm relative z-10 font-light">I engineer flawless user interfaces that break away from mold-driven templates, focusing on immersive motion and pixel-perfect execution.</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.7, delay: 0.1 }}
               className="md:col-span-2 md:row-span-1 border border-gray-800 bg-gray-950 p-8 md:p-10 flex flex-col items-start justify-center rounded-3xl overflow-hidden relative group transform-gpu will-change-transform"
            >
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500"></div>
               <h3 className="text-xs tracking-widest font-bold text-primary mb-4 uppercase">01 // Core Stack</h3>
               <p className="text-xl md:text-3xl font-bold tracking-tight text-gray-200">React.js, Flutter, firebase, Framer Motion, Tailwind CSS, TypeScript.</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.7, delay: 0.2 }}
               className="md:col-span-1 md:row-span-2 border border-gray-800 p-8 flex flex-col justify-between rounded-3xl bg-linear-to-t from-primary/10 to-transparent relative overflow-hidden group transform-gpu will-change-transform"
            >
               <h3 className="text-xs tracking-widest font-bold text-primary mb-4 uppercase relative z-10">02 // Metrics</h3>
               <div className="relative z-10">
                  <div className="text-7xl md:text-8xl font-black text-white mb-2 tracking-tighter mix-blend-difference group-hover:text-primary transition-colors duration-300">99<span className="text-primary group-hover:text-white text-4xl">%</span></div>
                  <p className="text-gray-400 text-sm md:text-base font-light">Average Lighthouse performance score across deployed platforms.</p>
               </div>
            </motion.div>

            <motion.div 
               onClick={() => { window.scrollTo(0, 0); navigate('/works'); }}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.7, delay: 0.3 }}
               className="md:col-span-1 md:row-span-1 glass p-8 flex flex-col justify-between hover:bg-primary hover:text-black transition-colors duration-500 rounded-3xl group cursor-pointer transform-gpu will-change-transform"
            >
               <h3 className="text-xs tracking-widest font-bold text-gray-500 group-hover:text-black/60 uppercase">03 // View Works</h3>
               <div className="self-end bg-white/10 p-4 rounded-full group-hover:bg-white group-hover:text-black transition-all group-hover:-translate-y-2 group-hover:translate-x-2">
                  <ArrowUpRight size={28} strokeWidth={3} />
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.7, delay: 0.4 }}
               className="md:col-span-2 md:row-span-1 border border-gray-800 rounded-3xl p-8 flex items-center transform-gpu will-change-transform bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0icmdiYSg4OSwyMjQsNzEsMC4yKSI+PC9jaXJjbGU+Cjwvc3ZnPg==')]"
            >
               <p className="text-3xl md:text-4xl font-light italic text-gray-500 max-w-md">Form follows <span className="text-primary/80 font-serif">function</span>.</p>
            </motion.div>
         </div>
      </section>
   )
}

export default BentoSkills;
