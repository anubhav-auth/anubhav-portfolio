
import { useEffect, useRef } from 'react';

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div 
            ref={contentRef}
            className="flex flex-col md:flex-row items-center gap-12 opacity-0"
          >
            <div className="w-full md:w-2/5">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-neon-purple/30">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-neon-blue/20 backdrop-blur-xl border border-neon-blue/30 flex items-center justify-center z-10">
                  <span className="font-bold text-xl">10+</span>
                  <span className="text-xs ml-1">Years<br/>Exp.</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <h3 className="text-2xl font-bold mb-4">Full-Stack Developer & UI/UX Enthusiast</h3>
              
              <p className="text-white/70 mb-4">
                I'm a passionate full-stack developer with a keen eye for design and user experience. With over 10 years of experience in the industry, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale enterprise applications.
              </p>
              
              <p className="text-white/70 mb-6">
                My approach combines technical expertise with creative problem-solving. I believe in writing clean, maintainable code and creating intuitive, user-friendly interfaces. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-white/70 text-sm">B.S. Computer Science<br />Stanford University</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-white/70 text-sm">San Francisco,<br />California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
