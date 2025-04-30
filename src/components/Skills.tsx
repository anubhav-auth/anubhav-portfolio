
import { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { HTML, CSS, Javascript, React, NodeJs, Git, Tailwind, Python, Kotlin } from './TechIcons';

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
    icon: <Kotlin />
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces, particularly single-page applications.",
    icon: <React />
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    icon: <NodeJs />
  },
  {
    name: "Git",
    description: "A distributed version control system for tracking changes in source code during software development.",
    icon: <Git />
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom user interfaces.",
    icon: <Tailwind />
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
