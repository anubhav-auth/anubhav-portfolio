import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Don't track sections on non-home pages
      if (!isHomePage) return;
      
      const sections = ['home', 'skills', 'about', 'projects', 'contact'];
      
      // Set scrolled state for navbar background
      setScrolled(window.scrollY > 20);
      
      // Find current section
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    // If we're on the home page, scroll to the section
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // Otherwise, navigate to home page and then scroll
    else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
      scrolled || !isHomePage ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gradient"></Link>
        <div className="hidden md:flex space-x-1">
          <Button
            variant="ghost"
            className={`${
              isHomePage && activeSection === 'home' ? 'text-neon-purple' : 'text-white/70'
            } hover:text-white transition-colors`}
            onClick={() => scrollToSection('home')}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className={`${
              isHomePage && activeSection === 'skills' ? 'text-neon-purple' : 'text-white/70'
            } hover:text-white transition-colors`}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </Button>
          <Button
            variant="ghost"
            className={`${
              isHomePage && activeSection === 'about' ? 'text-neon-purple' : 'text-white/70'
            } hover:text-white transition-colors`}
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
          <Button
            variant="ghost"
            className={`${
              isHomePage && activeSection === 'projects' ? 'text-neon-purple' : 'text-white/70'
            } hover:text-white transition-colors`}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            className={`${
              location.pathname === '/projects' ? 'text-neon-purple' : 'text-white/70'
            } hover:text-white transition-colors`}
            asChild
          >
            <Link to="/projects">All Projects</Link>
          </Button>
          <Button
            variant="ghost"
            className={`${
              isHomePage && activeSection === 'contact' ? 'text-neon-purple' : 'text-white/70'
            } hover:text-white transition-colors`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-white/70 hover:text-white"
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
