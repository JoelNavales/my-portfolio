import CustomCursor from '../components/ui/CustomCursor';
import FloatingOrbNav from '../components/layout/FloatingOrbNav';
import Hero from '../components/sections/Hero';
import BentoSkills from '../components/sections/BentoSkills';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-[var(--color-primary)] selection:text-black">
      <CustomCursor />
      <FloatingOrbNav />
      <main>
        <Hero />
        <BentoSkills />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
