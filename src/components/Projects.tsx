
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
    id: "Washup",
    title: "Washup",
    description: "WashUp is a laundry service app for students, offering easy pickup, order tracking, and doorstep delivery with OTP-based login and real-time updates.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/WashUp",
    githubUrl: "https://github.com/anubhav-auth/WashUp"
  },
  {
    id: "DeWork-Program",
    title: "DeWork-Program",
    description: "Decentralized work management platform built on Solana, enabling on-chain task validation, automated payments, and transparent reputation tracking. Backend with Spring Boot & MongoDB, mobile app with Jetpack Compose.",
    image: "https://github.com/user-attachments/assets/93ca572b-5ed3-44a5-830e-19afc37743e5",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/dework-program",
    githubUrl: "https://github.com/anubhav-auth/dework-program"
  },
  {
    id: "Chat-Application",
    title: "Real-Time Chat Application",
    description: "A real-time chat app built with Kotlin and Jetpack Compose, using Apollo Client for GraphQL communication with a Spring Boot backend. Supports real-time messaging and status updates via GraphQL subscriptions. 🚀",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/message_practice",
    githubUrl: "https://github.com/anubhav-auth/message_practice"
  },
  {
    id: "Chat-Backend",
    title: "Real-Time Chat App Backend",
    description: "A real-time chat backend built with Spring Boot and WebSockets, enabling seamless and scalable messaging between users. Supports authentication, message persistence, and multi-room chat functionality.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/messagingPrac",
    githubUrl: "https://github.com/anubhav-auth/messagingPrac"
  },
  {
    id: "hello_solana",
    title: "hello_solana",
    description: " showcases a scalable Solana client interacting with an on-chain program using the latest Solana SDKs and RPC mechanisms. It demonstrates transaction management, RPC integration, and asynchronous execution, ideal for developers integrating with Solana's high-performance blockchain.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/hello_solana",
    githubUrl: "https://github.com/anubhav-auth/hello_solana"
  },
  {
    id: "Conflux",
    title: "Conflux",
    description: "Multi-tenant MVP enabling organizations to onboard, manage events, and handle registrations securely. Built with Spring Boot and MongoDB, it uses JWT authentication, role-based access, automated notifications, and a lightweight admin dashboard—all containerized for scalable deployment.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/Conflux",
    githubUrl: "https://github.com/anubhav-auth/Conflux"
  },
  {
    id: "FlightPath_11",
    title: "FlightPath_11",
    description: "FlightPath 11 is a Jetpack Compose-based Android game inspired by Flappy Bird, featuring smooth physics, dynamic obstacles, and score tracking.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/FlightPath_11",
    githubUrl: "https://github.com/anubhav-auth/FlightPath_11"
  },
  {
    id: "Bento",
    title: "Bento",
    description: "Bento, a platform that connects restaurants with customers and delivery personnel. Customers can browse a list of restaurants, view menus, place orders, and have them delivered, while restaurant partners and delivery personnel manage their tasks via dedicated apps.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/Bento",
    githubUrl: "https://github.com/anubhav-auth/Bento"
  },
  {
    id: "Bento-backend",
    title: "Bento-backend",
    description: "Bento Backend is a Spring Boot-powered API that connects restaurants, customers, and delivery personnel. It handles order management, user authentication, payments, and real-time tracking, ensuring a seamless food delivery experience.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/Bento-backend",
    githubUrl: "https://github.com/anubhav-auth/Bento-backend"
  },
  {
    id: "Safe_T",
    title: "Safe_T",
    description: "SAFE_T Band is an enterprise-grade IoT solution engineered for real-time health and safety monitoring. It leverages ESP32, MQTT, Firebase, AI analytics, and a Spring Boot dashboard to deliver actionable insights and proactive emergency alerts.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://safe-t.work.gd/",
    githubUrl: "https://github.com/kamallochan2004/Safe_T"
  },
  {
    id: "nex-mint",
    title: "nex-mint",
    description: "Nex Mint is a Solana program built with Anchor for creating and minting SPL tokens. It supports token initialization, associated accounts, and minting, with a full TypeScript test suite.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/nex-mint",
    githubUrl: "https://github.com/anubhav-auth/nex-mint"
  },
  {
    id: "Rustlet",
    title: "Rustlet",
    description: "Rustlet is a high-performance HTTP server built in Rust, leveraging Tokio for asynchronous I/O and Hyper for efficient HTTP handling. Its modular architecture and Tower middleware integration make it ideal for scalable web server solutions.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/Rustlet",
    githubUrl: "https://github.com/anubhav-auth/Rustlet"
  },
  {
    id: "rush",
    title: "Rush",
    description: "Rush is a lightweight, custom-built shell in Rust that supports basic shell operations, command execution, directory navigation, and piping between commands. It features a custom command parser, dynamic prompt updates, and error handling, making it a minimal yet functional alternative shell for learning and experimentation.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/rush",
    githubUrl: "https://github.com/anubhav-auth/rush"
  },
  {
    id: "Bookpedia",
    title: "Bookpedia",
    description: "A cross-platform book companion app built with Jetpack Compose Multiplatform (CMP). Search books via Open Library API, save favorites offline with Room, and enjoy seamless functionality on Android, iOS, macOS, Windows, and Linux. 🚀",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/Bookpedia",
    githubUrl: "https://github.com/anubhav-auth/Bookpedia"
  },
  {
    id: "Scientific_Calculator",
    title: "Scientific Calculator",
    description: "Scientific Calculator is a versatile Android application that functions as both a standard calculator and a scientific calculator. With a simple tap, you can switch between modes to perform basic arithmetic or advanced scientific calculations, making it a powerful tool for students, engineers, and anyone who needs to perform complex calculations.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/Scientific_Calculator",
    githubUrl: "https://github.com/anubhav-auth/Scientific_Calculator"
  },
  {
    id: "PokeDex",
    title: "PokeDex",
    description: "This application allows users to explore and learn about various Pokémon, displaying detailed stats and images fetched from the PokéAPI. Whether you're a Pokémon enthusiast or just curious about the world of Pokémon, this app provides an engaging and informative experience.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/PokeDex",
    githubUrl: "https://github.com/anubhav-auth/PokeDex"
  },
  {
    id: "WeatherApp",
    title: "WeatherApp",
    description: "WeatherApp is a sleek and modern Android application that provides accurate and up-to-date weather information for any location. Developed using Kotlin and Jetpack Compose, this app offers a seamless and intuitive user experience, allowing you to stay informed about the weather wherever you are.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/Weather",
    githubUrl: "https://github.com/anubhav-auth/Weather"
  },
  {
    id: "CoinLog",
    title: "CoinLog",
    description: "CoinLog is your ultimate financial tracking app designed to help you manage and monitor your finances effortlessly. Whether you're keeping track of daily expenses, overseeing your total income and expenditures, or saving for specific goals with our unique pots feature, CoinLog makes it simple and intuitive.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: [],
    demoUrl: "https://github.com/anubhav-auth/CoinLog",
    githubUrl: "https://github.com/anubhav-auth/CoinLog"
  },
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
          {projects.slice(0, 3).map((project, index) => (
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
