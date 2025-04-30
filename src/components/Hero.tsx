
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  name?: string;
  title?: string;
}

const Hero = ({ name = "John Doe", title = "Full-Stack Developer | Problem Solver | Innovator" }: HeroProps) => {
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
        <h2 className="text-xl md:text-2xl text-white/80 mb-12">
          {title}
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
