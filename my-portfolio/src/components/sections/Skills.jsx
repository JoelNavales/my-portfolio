import ScrollReveal from '../animations/ScrollReveal';
import { Code, Layout, Smartphone, Zap } from 'lucide-react';

const skills = [
  { icon: <Layout />, title: "Frontend Execution", desc: "Pixel-perfect implementations of complex UI/UX designs with attention to detail." },
  { icon: <Code />, title: "Modern Tech Stack", desc: "React, Next.js, Framer Motion, and Tailwind CSS for rapid and robust development." },
  { icon: <Zap />, title: "Performance First", desc: "Optimized web experiences scoring high on Lighthouse and core web vitals." },
  { icon: <Smartphone />, title: "Responsive Design", desc: "Flawless and fluid experiences across all device form factors and browsers." },
];

const Skills = () => {
  return (
    <section id="about" className="py-32 relative flex flex-col items-center">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Premium <span className="text-[var(--color-primary)] text-glow">Capabilities</span></h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto">Delivering high-end digital solutions focused on aesthetics, performance, and user engagement.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction="up" className="h-full">
              <div className="glass-card p-8 rounded-2xl h-full border border-gray-800/50 hover:border-[var(--color-primary)]/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                 <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(141,255,105,0.1)]">
                    {skill.icon}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{skill.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed font-light">{skill.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
