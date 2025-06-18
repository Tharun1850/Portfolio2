import React from 'react';
import { ArrowDown, Mail, Linkedin, Phone, MapPin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient">Tharun Kumar</span>
            <span className="text-gradient-primary"> Bandaru</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-foreground/80">
            Senior Data Scientist at{' '}
            <a 
              href="https://c3.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              C3.ai
            </a>
          </h2>
          
          <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl">
            Specialized in <span className="highlight-text">Machine Learning</span>, <span className="highlight-text">Deep Learning</span>, 
            and <span className="highlight-text">Artificial Intelligence</span> solutions.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
            <a href="#contact" className="interactive-button flex items-center justify-center gap-2 animate-pulse-glow">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            
            <a href="#experience" className="interactive-button flex items-center justify-center gap-2 relative group">
              <span>View Experience</span>
              <div className="absolute -bottom-8 left-0 w-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/80 hidden sm:block">
                Click to see my professional journey
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-8">
            <a 
              href="mailto:tharunbandaru18@gmail.com" 
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm sm:text-base">tharunbandaru18@gmail.com</span>
            </a>
            
            <a 
              href="tel:+14707753759" 
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm sm:text-base">+1 470-775-3759</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/tharun-kumar-bandaru/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/Tharun1850" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
            
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin className="h-5 w-5" />
              <span className="text-sm sm:text-base">Redwood City, CA</span>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
