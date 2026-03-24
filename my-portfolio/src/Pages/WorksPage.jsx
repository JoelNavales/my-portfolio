import { useEffect } from 'react';
import CustomCursor from '../components/animations/CustomCursor';
import FloatingOrbNav from '../components/layout/FloatingOrbNav';
import Works from '../components/sections/Works';
import Footer from '../components/layout/Footer';

const WorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-primary selection:text-black pt-12 md:pt-24">
      <CustomCursor />
      <FloatingOrbNav />
      <main className="min-h-screen mb-24">
        <Works />
      </main>
      <Footer />
    </div>
  );
};

export default WorksPage;
