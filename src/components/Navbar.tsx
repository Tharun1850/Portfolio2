import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 20);
      
      // Find which section is currently in view
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections.reverse()) { // Check from bottom to top
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle nav link click with bouncing animation
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    
    // Add bounce animation class
    link.classList.add('animate-nav-bounce');
    
    // Remove animation class after it completes
    setTimeout(() => {
      link.classList.remove('animate-nav-bounce');
    }, 600); // Match with animation duration
    
    // Close mobile menu when a link is clicked
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'backdrop-blur-lg bg-background/70 shadow-md' : 'bg-transparent'
      )}
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-xl font-bold text-gradient-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
              onClick={handleNavLinkClick}
              aria-label="Go to home section"
            >
              Tharun Kumar
            </a>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavLinkClick}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-primary nav-link focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1',
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground/80'
                )}
                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
        )}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-lg bg-background/90 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
                activeSection === link.href.substring(1) ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
              )}
              onClick={handleNavLinkClick}
              aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
