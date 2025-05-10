import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { projects } from './Projects';
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { marked } from 'marked';
import type { FC } from 'react';

const ProjectDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [readme, setReadme] = useState<string>('');
  const [project, setProject] = useState<typeof projects[0] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Find the project with the matching ID
        const currentProject = projects.find(p => p.id === id);
        setProject(currentProject);
        
        if (currentProject && currentProject.githubUrl) {
          // Extract owner and repo from GitHub URL
          // Example: https://github.com/username/repo-name
          const githubUrlParts = currentProject.githubUrl.split('/');
          if (githubUrlParts.length >= 5) {
            const owner = githubUrlParts[3];
            const repo = githubUrlParts[4];
            
            // Fetch README from GitHub API
            const response = await fetch(
              `https://api.github.com/repos/${owner}/${repo}/readme`,
              {
                headers: {
                  'Accept': 'application/vnd.github.v3.raw',
                  // If you're hitting rate limits, you would add your GitHub token here
                  // 'Authorization': `token ${process.env.GITHUB_TOKEN}`
                }
              }
            );
            
            if (response.ok) {
              const readmeContent = await response.text();
              // Parse markdown to HTML
              const parsedReadme = marked.parse(readmeContent);
              // Handle both synchronous and asynchronous marked implementations
              if (parsedReadme instanceof Promise) {
                parsedReadme.then(htmlContent => {
                  setReadme(htmlContent);
                });
              } else {
                setReadme(parsedReadme);
              }
            } else {
              // If README is not found, try to fetch README.md directly
              const fallbackResponse = await fetch(
                `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`
              );
              
              if (fallbackResponse.ok) {
                const readmeContent = await fallbackResponse.text();
                const parsedReadme = marked.parse(readmeContent);
                // Handle both synchronous and asynchronous marked implementations
                if (parsedReadme instanceof Promise) {
                  parsedReadme.then(htmlContent => {
                    setReadme(htmlContent);
                  });
                } else {
                  setReadme(parsedReadme);
                }
              } else {
                throw new Error('README not found');
              }
            }
          } else {
            throw new Error('Invalid GitHub URL format');
          }
        } else {
          throw new Error('Project not found or missing GitHub URL');
        }
      } catch (err) {
        console.error('Error fetching README:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Set a default README message if fetch fails
        setReadme('<p>README not available for this project.</p>');
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchReadme();
    }
    
    // Scroll to top when project changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-neon-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading project details...</p>
        </div>
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
          
          {/* Error message if fetch failed */}
          {error && (
            <div className="bg-red-900/30 border border-red-500 text-white p-4 rounded-lg mb-6">
              <p className="font-medium">Couldn't load README: {error}</p>
              <p className="text-sm mt-1">Check the GitHub repository link or network connection.</p>
            </div>
          )}
          
          {/* README content */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 prose prose-invert max-w-none">
            {readme ? (
              <div dangerouslySetInnerHTML={{ __html: readme }} className="markdown-content" />
            ) : (
              <p>No README available for this project.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;