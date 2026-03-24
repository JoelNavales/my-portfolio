import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 bg-[#020202] py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[300px] bg-primary opacity-[0.03] blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center z-10 relative">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tighter block mb-2">
            J<span className="text-primary">.</span>N<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-gray-500 max-w-xs">
            Crafting premium digital experiences through motion and design.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-5">
            <a href="https://github.com/joelnavales" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/joelnavales" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300">
              <Linkedin size={18} />
            </a>
             <a href="mailto:hello@example.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300">
              <Mail size={18} />
            </a>
          </div>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Joel Navales. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
