import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface HeroProps {
  name?: string;
  titles?: string[];
  startTyping?: boolean;
}

const Hero = ({ 
  name = "Anubhav Jaiswal", 
  titles = [
    "Android & Spring Boot Developer | AI/ML Engineer",
    "Blockchain Enthusiast | DevOps | Agile"
  ],
  startTyping = true,
}: HeroProps) => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startTyping) return;

    const currentTitle = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentIndex < currentTitle.length) {
      // Typing phase
      timeout = setTimeout(() => {
        setDisplayedTitle((prev) => prev + currentTitle[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 40);
    } else if (!isDeleting && currentIndex === currentTitle.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting phase
      timeout = setTimeout(() => {
        setDisplayedTitle((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, 25);
    } else if (isDeleting && currentIndex === 0) {
      // Move to next title
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, titleIndex, titles, startTyping]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Wave geometry
    const geometry = new THREE.PlaneGeometry(100, 100, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0x6b46c1, // Neon purple
      wireframe: true,
      transparent: false,
      opacity: 1,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    plane.rotation.x = Math.PI / 4;

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.01;
      const positions = plane.geometry.attributes.position.array as unknown as number[];
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time) * 5;
      }
      plane.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Three.js Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0" />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/50 to-black z-1"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="mb-1 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Hi, I'm 
        </h1>
        <h1 className="mb-9 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient text-shadow-glow">{name}</h1>
        <h2 className="text-xl md:text-2xl text-white/80 mb-12 relative">
          {displayedTitle}
          <span className="animate-blink">|</span>
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