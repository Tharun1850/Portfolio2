
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background/50 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/60 text-sm">
              &copy; {currentYear} Tharun Kumar Bandaru. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-1 text-foreground/60 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
