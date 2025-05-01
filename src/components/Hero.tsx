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
      {/* Hero content remains unchanged */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm</h1>
        <h1 className="text-7xl font-bold mb-6 text-gradient">{name}</h1>
        <h2 className="text-2xl mb-12">
          {displayedTitle}
          <span className="animate-blink">|</span>
        </h2>
        <div className="flex gap-4 justify-center">
          <Button onClick={scrollToProjects} className="px-8 py-4 rounded-lg">
            View My Work <ArrowDown className="ml-2" />
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;