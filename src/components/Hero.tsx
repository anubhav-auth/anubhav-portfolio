import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  name?: string;
  titles?: string[];
  startTyping?: boolean;
}

const Hero = ({ 
  name = "Anubhav Jaiswal", 
  titles = [
    "Android & Spring Boot Developer | AI/ML Engineer",
    "Blockchain Enthusiast | DevOps | Agile"
  ],
  startTyping = true,
}: HeroProps) => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!startTyping) return;

    const currentTitle = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentIndex < currentTitle.length) {
      // Typing phase
      timeout = setTimeout(() => {
        setDisplayedTitle((prev) => prev + currentTitle[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
    } else if (!isDeleting && currentIndex === currentTitle.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting phase
      timeout = setTimeout(() => {
        setDisplayedTitle((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, 50);
    } else if (isDeleting && currentIndex === 0) {
      // Move to next title
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, titleIndex, titles, startTyping]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/50 to-black z-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="mb-1 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Hi, I'm 
        </h1>
        <h1 className="mb-9 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient text-shadow-glow">{name}</h1>
        <h2 className="text-xl md:text-2xl text-white/80 mb-12 relative">
          {displayedTitle}
          <span className="animate-blink">|</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToProjects}
            className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-6 rounded-lg text-lg"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-8 py-6 rounded-lg text-lg"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) skillsSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ArrowDown className="h-6 w-6 text-white/70" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;