
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { projects } from './Projects';
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { marked } from 'marked';

// Sample READMEs for each project (in real implementation these would be fetched from GitHub)
const projectReadmes: Record<string, string> = {
  'ecommerce-dashboard': `
# E-Commerce Dashboard

## Overview
This comprehensive dashboard provides e-commerce businesses with real-time analytics, inventory management, and customer insights all in one place.

## Features
- Real-time sales analytics and reporting
- Inventory management system
- Customer behavior insights
- Order processing and fulfillment tracking
- User-friendly admin interface

## Technologies Used
- React for the frontend interface
- Node.js and Express for the backend API
- MongoDB for data storage
- Tailwind CSS for styling
- WebSockets for real-time updates

## Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/username/ecommerce-dashboard.git

# Install dependencies
cd ecommerce-dashboard
npm install

# Start the development server
npm run dev
\`\`\`

## Screenshots
![Dashboard Overview](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600)
  `,
  'task-management': `
# Task Management Application

## Overview
A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.

## Features
- Drag-and-drop task organization
- Real-time collaboration
- Task assignment and deadline management
- Project timelines and milestones
- File attachments and comments

## Technologies Used
- React for the frontend with Redux for state management
- Firebase for real-time database and authentication
- Material UI for component styling
- React DnD for drag-and-drop functionality

## Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/username/task-management.git

# Install dependencies
cd task-management
npm install

# Start the development server
npm start
\`\`\`

## Screenshots
![Task Board](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600)
  `,
  'financial-analytics': `
# Financial Analytics Platform

## Overview
Data visualization platform for financial analysts with interactive charts, predictive modeling, and report generation.

## Features
- Interactive financial charts and graphs
- Predictive modeling tools
- Automated report generation
- Data import/export functionality
- Custom dashboard creation

## Technologies Used
- TypeScript for type-safe code
- D3.js for data visualization
- Express backend API
- PostgreSQL database for data storage
- JWT authentication

## Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/username/financial-analytics.git

# Install dependencies
cd financial-analytics
npm install

# Set up environment variables
cp .env.example .env

# Start the development server
npm run dev
\`\`\`

## Screenshots
![Analytics Dashboard](https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600)
  `
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [readme, setReadme] = useState<string>('');
  const [project, setProject] = useState<typeof projects[0] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project with the matching ID
    const currentProject = projects.find(p => p.id === id);
    setProject(currentProject);
    
    if (currentProject && id && projectReadmes[id]) {
      // In a real implementation, you would fetch the README from GitHub
      // For this demo, we're using the static READMEs defined above
      const readmeContent = projectReadmes[id];
      // Parse markdown to HTML
      const parsedReadme = marked(readmeContent);
      setReadme(parsedReadme);
    }
    
    setLoading(false);
    
    // Scroll to top when project changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild variant="default" className="bg-neon-blue hover:bg-neon-blue/80">
          <Link to="/projects">View All Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in">
          {/* Back button */}
          <Button
            asChild
            variant="ghost"
            className="mb-6 text-gray-400 hover:text-white"
          >
            <Link to="/projects">
              <ArrowRight className="rotate-180 mr-2" /> Back to All Projects
            </Link>
          </Button>
          
          {/* Project title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{project.title}</h1>
          
          {/* Project image */}
          <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl mb-8">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            {project.demoUrl && (
              <Button 
                variant="default"
                className="bg-neon-blue hover:bg-neon-blue/80"
                onClick={() => window.open(project.demoUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button 
                variant="outline"
                className="border-white/20 hover:bg-white/5"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" /> View on GitHub
              </Button>
            )}
          </div>
          
          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-white">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-gray-800 text-gray-300 rounded-full px-4 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* README content */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: readme }} className="markdown-content" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
