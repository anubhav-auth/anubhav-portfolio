import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WelcomePage from "@/components/WelcomePage";

// Custom smooth scroll function with controllable duration and easing
const smoothScrollTo = (targetY: number, duration: number) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  // Easing function: easeInOutQuad for smooth start and end
  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Clamp to 1
    const easedProgress = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomeExiting, setWelcomeExiting] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  // Check sessionStorage on component mount to see if welcome has been shown in this session
  useEffect(() => {
    const hasSeenWelcomeThisSession = sessionStorage.getItem('hasSeenWelcome') === 'true';
    
    if (hasSeenWelcomeThisSession) {
      // Skip welcome screen if already seen in this session
      setShowWelcome(false);
      setStartTyping(true);
    }
  }, []);

  // Prevent scrolling when welcome page is shown
  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [showWelcome]);

  const handleWelcomeComplete = () => {
    // Store in sessionStorage that welcome has been shown for this session only
    sessionStorage.setItem('hasSeenWelcome', 'true');
    
    // Start exit animation first
    setWelcomeExiting(true);
    
    // After animation completes, remove the component
    setTimeout(() => {
      setShowWelcome(false);
      setTimeout(() => {
        setStartTyping(true);
      }, 300);
    }, 800); // Match with transition duration
  };

  return (
    <>
      {showWelcome && (
        <div className={`fixed inset-0 z-50 bg-black transition-transform duration-700 ease-in-out ${
          welcomeExiting ? '-translate-y-full' : 'translate-y-0'
        }`}>
          <WelcomePage onComplete={handleWelcomeComplete} />
        </div>
      )}
      
      <div className={`bg-black text-white min-h-screen transition-opacity duration-500 ${showWelcome ? 'opacity-40' : 'opacity-100'}`}>
        <Navigation />
        <Hero startTyping={startTyping}/>
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;