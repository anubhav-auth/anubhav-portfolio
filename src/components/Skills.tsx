import { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Link } from 'react-router-dom'; // Make sure you have react-router installed
import {
  HTML,
  CSS,
  JavaScript,
  Python,
  Git,
  MongoDB,
  Docker
} from "./TechIcons";
import { ArrowRight } from 'lucide-react'; // Import the arrow icon from lucide-react

interface Skill {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "HTML",
    description: "The standard markup language for documents designed to be displayed in a web browser.",
    icon: <HTML />
  },
  {
    name: "CSS",
    description: "A style sheet language used for describing the presentation of a document written in HTML.",
    icon: <CSS />
  },
  {
    name: "JavaScript",
    description: "A programming language that enables interactive web pages and is an essential part of web applications.",
    icon: <JavaScript />
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces, particularly single-page applications.",
    icon: <JavaScript />
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    icon: <MongoDB />
  },
  {
    name: "Git",
    description: "A distributed version control system for tracking changes in source code during software development.",
    icon: <Git />
  },
  {
    name: "Python",
    description: "A programming language that lets you work quickly and integrate systems more effectively.",
    icon: <Python />
  }
];

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
                card.classList.remove('opacity-0');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          Tech <span className="text-gradient">Stack</span>
        </h2>
        <p className="text-white/60 mb-12 text-center max-w-2xl mx-auto">
          I'm proficient in a range of modern technologies that empower me to build highly functional solutions.
          These are some of my main technologies.
        </p>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="skill-card opacity-0 bg-black border border-gray-800 p-6 rounded-xl card-hover">
              <div className="flex flex-col h-full">
                <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-lg bg-gray-900 mx-auto">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{skill.name}</h3>
                <p className="text-gray-400 text-center flex-grow">{skill.description}</p>
              </div>
            </Card>
          ))}
          
          {/* "View All Skills" Card */}
          <Link to="/all-skills" className="block">
            <Card className="skill-card opacity-0 bg-black border border-gray-800 p-6 rounded-xl card-hover group hover:border-purple-500 transition-all duration-300">
              <div className="flex flex-col h-full items-center justify-center">
                <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-lg bg-gray-900 mx-auto">
                  <div className="text-3xl text-purple-500 group-hover:text-purple-400 transition-colors duration-300">+</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">View All Skills</h3>
                <p className="text-gray-400 text-center flex-grow mb-4">Explore my full tech stack organized by categories</p>
                <div className="flex items-center text-purple-500 group-hover:text-purple-400 transition-all duration-300">
                  <span className="mr-2">Explore</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;