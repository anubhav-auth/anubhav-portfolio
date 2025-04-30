
import { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and customer insights.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "Firebase", "Redux", "Material UI"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "financial-analytics",
    title: "Financial Analytics Platform",
    description: "Data visualization platform for financial analysts with interactive charts, predictive modeling, and report generation.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
                card.classList.remove('opacity-0');
              }, index * 200);
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

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-white/60 mb-12 text-center max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built to solve a specific problem and showcases
          different aspects of my technical skills.
        </p>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Link key={index} to={`/project/${project.id}`} className="block h-full">
              <Card className="project-card opacity-0 overflow-hidden rounded-xl border-gray-800 bg-black card-hover h-full flex flex-col">
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
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            asChild
            variant="outline" 
            className="border-neon-blue text-white hover:bg-neon-blue hover:text-black transition-colors duration-300 text-lg px-8 py-6"
          >
            <Link to="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
