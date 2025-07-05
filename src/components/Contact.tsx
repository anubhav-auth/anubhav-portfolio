import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, AlertCircle, CheckCircle } from "lucide-react";
import { GitHub, Instagram, Leetcode, Twitter, Linkedin } from './TechIcons';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  general?: string; // Added for general form submission errors
}

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

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

  // Form validation
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    if (submitStatus) {
      setSubmitStatus(null);
      setErrors(prev => ({ ...prev, general: '' }));
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors(prev => ({ ...prev, general: '' }));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f8a879bf-3844-4a94-923f-15c800fb433a',
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          from_name: formData.name.trim(),
          form_name: 'Portfolio Contact Form'
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 403) {
          throw new Error('Invalid or unauthorized access key. Please check your Web3Forms configuration.');
        } else if (response.status === 429) {
          throw new Error('Too many requests. Please try again later.');
        } else {
          throw new Error(errorData.message || 'An unexpected error occurred while sending your message.');
        }
      }

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message due to server error.');
      }
    } catch (error: any) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setErrors(prev => ({
        ...prev,
        general: error.message || 'An unexpected error occurred. Please try again or contact me directly at anubhavauth@gmail.com.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

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
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-red-400">{errors.general || 'Failed to send message. Please try again or contact me directly at anubhavauth@gmail.com.'}</span>
                </div>
              )}
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                      Name *
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      className={`bg-white/5 border-white/10 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                      Email *
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      className={`bg-white/5 border-white/10 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1">
                    Subject *
                  </label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can I help you?" 
                    className={`bg-white/5 border-white/10 ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                    Message *
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..." 
                    className={`bg-white/5 border-white/10 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-neon-purple hover:bg-neon-purple/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
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
                  <a href="https://github.com/anubhav-auth" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <GitHub/>
                  </a>
                  <a href="https://www.linkedin.com/in/anubhav-auth/" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Linkedin/>
                  </a>
                  <a href="https://x.com/anubhavauth" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Twitter/>
                  </a>
                  <a href="https://www.instagram.com/unholy.human/" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Instagram/>
                  </a>
                  <a href="https://leetcode.com/u/unholyhuman/" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
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