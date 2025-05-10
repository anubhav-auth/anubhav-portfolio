
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { Codeforces, Devto, GitHub, Instagram, Leetcode, Medial, Medium, Twitter, Linkedin } from './TechIcons';

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-white/60 mb-12 text-center max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential opportunity? Feel free to reach out.
          </p>
          
          <div 
            ref={formRef}
            className="opacity-0 grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Name</label>
                    <Input id="name" placeholder="Your name" className="bg-white/5 border-white/10" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="bg-white/5 border-white/10" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1">Subject</label>
                  <Input id="subject" placeholder="How can I help you?" className="bg-white/5 border-white/10" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message here..." className="bg-white/5 border-white/10 min-h-[120px]" />
                </div>
                
                <Button 
                  type="button"
                  onClick={() => {
                    // Here we'd normally handle form submission
                    // Since we can't use form submission, this is just for UI
                    alert("Message functionality would be implemented in a real application.");
                  }}
                  className="w-full bg-neon-purple hover:bg-neon-purple/80"
                >
                  Send Message
                </Button>
              </div>
            </div>
            
            <div>
              <div className="glass-card p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 text-neon-blue mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-white/70">anubhavauth@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 text-neon-blue mt-1 flex items-center justify-center">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-white/70">Bhubaneswar, In</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#github" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <GitHub/>
                  </a>
                  <a href="#linkedin" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Linkedin/>
                  </a>
                  <a href="#twitter" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Twitter/>
                  </a>
                  <a href="#twitter" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Instagram/>
                  </a>
                  <a href="#twitter" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Devto/>
                  </a>
                  <a href="#twitter" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Medium/>
                  </a>
                  <a href="#twitter" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Medial/>
                  </a>
                  <a href="#twitter" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Codeforces/>
                  </a>
                  <a href="#twitter" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Leetcode/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
