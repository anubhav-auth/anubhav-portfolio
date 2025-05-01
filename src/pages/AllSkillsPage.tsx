import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  // Programming Languages
  Kotlin, Java, Rust, JavaScript, Python, Cpp, HTML, CSS, Bash,
  // Frameworks and Technologies
  AndroidStudio, Apollo, Ktor, SpringBoot, GraphQL, Nginx, Redis, Kafka,
  // Databases
  MySQL, MongoDB, SQLite, Postgres, Firebase,
  // Tools and Platforms
  VSCode, IntelliJ, PyCharm, WebStorm, Docker, Figma, Git, GitHub, Postman, Blender, Linux,
  // Python ML Libraries
  FastAI, Matplotlib, NumPy, Pandas, ScikitLearn
} from "../components/TechIcons";

// Define the types
interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    description: "I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure solutions.",
    skills: [
      { name: "TypeScript", icon: <JavaScript /> },
      { name: "Node.js", icon: <JavaScript /> },
      { name: "Express", icon: <JavaScript /> },
      { name: "Python", icon: <Python /> },
      { name: "GraphQL", icon: <GraphQL /> },
      { name: "NestJS", icon: <JavaScript /> },
      { name: "Java", icon: <Java /> },
      { name: "Spring Boot", icon: <SpringBoot /> },
      { name: "Kafka", icon: <Kafka /> },
      { name: "Redis", icon: <Redis /> },
      { name: "MongoDB", icon: <MongoDB /> },
      { name: "PostgreSQL", icon: <Postgres /> },
      { name: "MySQL", icon: <MySQL /> },
      { name: "SQLite", icon: <SQLite /> }
    ]
  },
  {
    title: "Frontend & Design",
    description: "I'm passionate about design, animation, and interactions, always aiming to build fun websites with great user experiences.",
    skills: [
      { name: "HTML", icon: <HTML /> },
      { name: "CSS", icon: <CSS /> },
      { name: "JavaScript", icon: <JavaScript /> },
      { name: "React", icon: <JavaScript /> },
      { name: "Vue", icon: <JavaScript /> },
      { name: "Svelte", icon: <JavaScript /> },
      { name: "Tailwind CSS", icon: <CSS /> },
      { name: "Figma", icon: <Figma /> },
      { name: "Framer Motion", icon: <JavaScript /> },
      { name: "GSAP", icon: <JavaScript /> },
      { name: "Three.js", icon: <JavaScript /> },
      { name: "WebGL", icon: <JavaScript /> }
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "I have deployed and managed various applications using tools such as AWS, GCP, and other cloud services.",
    skills: [
      { name: "AWS", icon: <Linux /> },
      { name: "GCP", icon: <Linux /> },
      { name: "Docker", icon: <Docker /> },
      { name: "Kubernetes", icon: <Linux /> },
      { name: "Terraform", icon: <Linux /> },
      { name: "GitHub Actions", icon: <GitHub /> },
      { name: "Jenkins", icon: <Linux /> },
      { name: "Nginx", icon: <Nginx /> },
      { name: "Linux", icon: <Linux /> },
      { name: "Bash", icon: <Bash /> },
      { name: "Prometheus", icon: <Linux /> },
      { name: "Grafana", icon: <Linux /> }
    ]
  },
  {
    title: "Management",
    description: "I have worked with multiple clients and stakeholders to define projects that suit their needs and have led these projects.",
    skills: [
      { name: "Agile", icon: <GitHub /> },
      { name: "Scrum", icon: <GitHub /> },
      { name: "Jira", icon: <GitHub /> },
      { name: "Confluence", icon: <GitHub /> },
      { name: "Trello", icon: <GitHub /> },
      { name: "Notion", icon: <GitHub /> },
      { name: "Office", icon: <Linux /> }
    ]
  }
];

const AllSkillsPage = () => {
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    categoryRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      categoryRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 py-16 px-6">
      <div className="container mx-auto">
        <div className="mb-12">
          <Link to="/#skills" className="flex items-center text-purple-500 hover:text-purple-400 transition-colors mb-8">
            <ArrowLeft size={20} className="mr-2" />
            <span>Back to Portfolio</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My Complete <span className="text-gradient">Tech Stack</span>
          </h1>
          <p className="text-white/60 max-w-3xl">
            A comprehensive overview of all the technologies, frameworks, and tools I've worked with,
            organized by categories to showcase my technical breadth and depth.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              ref={el => categoryRefs.current[categoryIndex] = el}
              className="opacity-0 transition-opacity duration-700"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">{category.title}</h2>
                <p className="text-white/60 max-w-3xl">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <div 
                    key={`${category.title}-${skill.name}`} 
                    className="bg-black border border-gray-800 rounded-lg p-4 flex flex-col items-center hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 card-hover"
                  >
                    <div className="mb-3 flex items-center justify-center h-12 w-12 rounded-lg bg-gray-900">
                      {skill.icon}
                    </div>
                    <h3 className="text-center font-medium">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSkillsPage;