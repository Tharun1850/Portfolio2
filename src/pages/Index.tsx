
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
