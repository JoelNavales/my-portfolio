import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects, categories } from '../../data/projects';

const Works = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="works" className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto z-20 relative bg-[#020202]">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="transform-gpu will-change-transform"
                >
                    <h2 className="text-sm tracking-widest font-bold text-primary mb-4 uppercase">Selected Works</h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight">
                        DIGITAL <br className="hidden md:block" />
                        <span className="text-primary text-glow">EXPERIENCES.</span>
                    </h3>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-2 md:gap-4 transform-gpu will-change-transform"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 border ${
                                activeCategory === category 
                                    ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(89,224,71,0.3)]' 
                                    : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-500 hover:text-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group relative flex flex-col glass-card rounded-3xl overflow-hidden border border-gray-900 bg-gray-950/50 hover:border-primary/40 transition-colors duration-500"
                        >
                            <div className="relative h-64 w-full overflow-hidden bg-gray-900 flex items-center justify-center">
                                <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
                                   <div className="w-32 h-32 rounded-full bg-primary/20 blur-[60px]" />
                                   <span className="absolute font-serif italic text-4xl text-gray-500">Work {project.id}</span>
                                </div>
                            </div>

                            <div className="p-8 relative z-20 grow flex flex-col justify-between">
                                <div>
                                    <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">
                                        {project.category}
                                    </p>
                                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-400 font-light text-sm mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-800/50">
                                    <a href={project.link || "#"} className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors group/link cursor-pointer">
                                        <span>LIVE PREVIEW</span>
                                        <ArrowUpRight size={16} className="group-hover/link:text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-all" />
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors group/link cursor-pointer ml-4">
                                        <span>GITHUB</span>
                                        <Github size={16} className="group-hover/link:text-white transition-all" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

        </section>
    );
};

export default Works;
