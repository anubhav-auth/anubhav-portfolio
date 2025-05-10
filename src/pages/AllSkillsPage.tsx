import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  // Programming Languages
  Kotlin, Java, Rust, JavaScript, Python, Cpp, HTML, CSS, Bash,
  // Frameworks and Technologies
  Android, AndroidStudio, Apollo, Ktor, SpringBoot, GraphQL, Nginx, Redis, Kafka,
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
    title: "Android Development",
    description: "Experienced in building modern Android applications using Jetpack Compose, Kotlin, and integrating APIs and architectural patterns like MVVM.",
    skills: [
      { name: "Kotlin", icon: <Kotlin /> },
      { name: "Java", icon: <Java /> },
      { name: "Android", icon: <Android /> },
      { name: "Jetpack Compose", icon: <Kotlin /> }, // placeholder icon
      { name: "Ktor", icon: <Ktor /> },
      { name: "Retrofit", icon: <Ktor /> },
      { name: "Koin", icon: <Ktor /> },
      { name: "Dagger$Hilt", icon: <Ktor /> },
      { name: "Apollo Client", icon: <Apollo /> },
      { name: "Firebase", icon: <Firebase /> },
      { name: "SQLite", icon: <SQLite /> },
    ]
  },
  {
    title: "Backend Development",
    description: "Skilled in building robust, scalable, and secure REST/GraphQL APIs using modern backend frameworks, event-driven architectures, and database systems.",
    skills: [
      { name: "Spring Boot", icon: <SpringBoot /> },
      { name: "Ktor", icon: <Ktor /> },
      { name: "GraphQL", icon: <GraphQL /> },
      { name: "Kafka", icon: <Kafka /> },
      { name: "Redis", icon: <Redis /> },
      { name: "MongoDB", icon: <MongoDB /> },
      { name: "PostgreSQL", icon: <Postgres /> },
      { name: "MySQL", icon: <MySQL /> },
    ]
  },
  {
    title: "Web Development",
    description: "Focused on crafting responsive web interfaces and dynamic applications using modern frameworks and design systems.",
    skills: [
      { name: "JavaScript", icon: <JavaScript /> },
      { name: "HTML5", icon: <HTML /> },
      { name: "CSS3", icon: <CSS /> },
      { name: "React", icon: <JavaScript /> }, // Consider custom React icon if available
      { name: "Tailwind CSS", icon: <CSS /> }, // Consider Tailwind icon if available
    ]
  },
  {
    title: "Blockchain Development",
    description: "Smart contract development and decentralized application architecture on Solana.",
    skills: [
      { name: "Solana", icon: <Rust /> },
      { name: "Rust", icon: <Rust /> },
      { name: "Anchor Framework", icon: <Rust /> }
    ]
  },
  {
    title: "AI/ML & Data Science",
    description: "Applied machine learning and data science using Python-based libraries for research, experimentation, and deployment.",
    skills: [
      { name: "Python", icon: <Python /> },
      { name: "NumPy", icon: <NumPy /> },
      { name: "Pandas", icon: <Pandas /> },
      { name: "Matplotlib", icon: <Matplotlib /> },
      { name: "Scikit-Learn", icon: <ScikitLearn /> },
      { name: "FastAI", icon: <FastAI /> },
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Experience in containerization, orchestration, CI/CD, reverse proxies, and infrastructure automation on Linux-based systems.",
    skills: [
      { name: "Docker", icon: <Docker /> },
      { name: "Kubernetes", icon: <Linux /> }, // Placeholder
      { name: "GitHub Actions", icon: <GitHub /> },
      { name: "Nginx", icon: <Nginx /> },
      { name: "Linux", icon: <Linux /> },
      { name: "Bash", icon: <Bash /> },
    ]
  },
  {
    title: "Tools & IDEs",
    description: "Daily drivers for development, debugging, design, and version control across various platforms.",
    skills: [
      { name: "VS Code", icon: <VSCode /> },
      { name: "IntelliJ IDEA", icon: <IntelliJ /> },
      { name: "Android Studio", icon: <AndroidStudio /> },
      { name: "PyCharm", icon: <PyCharm /> },
      { name: "WebStorm", icon: <WebStorm /> },
      { name: "Figma", icon: <Figma /> },
      { name: "Postman", icon: <Postman /> },
      { name: "Git", icon: <Git /> },
      { name: "GitHub", icon: <GitHub /> },
      { name: "Blender", icon: <Blender /> },
    ]
  },
  {
    title: "Soft Skills & Management",
    description: "Led multiple technical projects with agile practices and cross-functional collaboration with designers, developers, and stakeholders.",
    skills: [
      { name: "Agile", icon: <GitHub /> }, // Placeholder
      { name: "Scrum", icon: <GitHub /> }, // Placeholder
      { name: "Jira", icon: <GitHub /> }, // Placeholder
      { name: "Confluence", icon: <GitHub /> }, // Placeholder
      { name: "Trello", icon: <GitHub /> }, // Placeholder
      { name: "Notion", icon: <GitHub /> }, // Placeholder
      { name: "MS Office", icon: <Linux /> }, // Placeholder
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
                {category.skills.map((skill) => (
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