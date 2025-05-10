
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from '@/components/Projects';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';


// Combine existing and additional projects
const allProjects = [...projects];

const AllProjects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate project cards on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
                card.classList.remove('opacity-0');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Back button */}
        <Button
          asChild
          variant="ghost"
          className="mb-6 text-gray-400 hover:text-white"
        >
          <Link to="/">
            <ArrowRight className="rotate-180 mr-2" /> Back to Home
          </Link>
        </Button>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">All Projects</h1>
        <p className="text-white/60 mb-12 max-w-2xl">
          Explore my complete portfolio of projects. Each project represents a unique challenge and showcases 
          different aspects of my technical skills and problem-solving approach.
        </p>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <Card key={index} className="project-card opacity-0 overflow-hidden rounded-xl border-gray-800 bg-black card-hover h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-gray-800 text-gray-300 rounded-full px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <Button 
                    asChild
                    variant="default"
                    className="flex-1 bg-neon-blue hover:bg-neon-blue/80"
                  >
                    <Link to={`/project/${project.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
