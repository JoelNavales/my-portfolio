import React from 'react';

const PortfolioInProgress = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans text-slate-800">
      
      {/* Main Content Card */}
      <div className="max-w-lg w-full text-center space-y-10">
        
        {/* CSS-only Animated Loader */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-t-4 border-blue-600 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-r-4 border-indigo-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            <div className="absolute inset-4 border-b-4 border-sky-400 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Portfolio in Progress
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            I'm currently designing and building my new digital space. The code is compiling, the coffee is brewing, and it will be live soon.
          </p>
        </div>

        {/* Links Section */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4 uppercase tracking-wider font-semibold">
            Find me elsewhere in the meantime
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-colors font-medium"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:youremail@example.com" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-sm"
            >
              Email Me
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioInProgress;