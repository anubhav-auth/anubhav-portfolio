
import { useEffect, useRef } from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'

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
                    src={img2} 
                    alt="Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-neon-blue/20 backdrop-blur-xl border border-neon-blue/30 flex items-center justify-center z-10">
                  <span className="font-bold text-xl">1+</span>
                  <span className="text-xs ml-1">Years<br/>Exp.</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <h3 className="text-2xl font-bold mb-4">Android Developer & Backend Engineer</h3>
              
              <p className="text-white/70 mb-4">
                I'm a full-stack developer with a strong focus on Android (Kotlin, Jetpack Compose) and backend systems (Spring Boot, MongoDB). I build scalable, real-world applications—from cross-platform mobile apps to SaaS platforms—balancing performance, usability, and clean architecture.
              </p>

              <p className="text-white/70 mb-6">
              I bring a product-driven mindset, building scalable and impactful solutions across food-tech, campus automation, and real-time services. I’m deepening my expertise in AI/ML, DevOps, and distributed systems, while mentoring peers and leading technical initiatives from concept to deployment.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-white/70 text-sm">
                    B.Tech Computer Science & Engineering<br />
                    ITER, SOA University
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-white/70 text-sm">
                    Bhubaneswar,<br />
                    India
                  </p>
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
