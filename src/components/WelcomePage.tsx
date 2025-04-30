import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface WelcomePageProps {
  onComplete: () => void;
}

const WelcomePage = ({ onComplete }: WelcomePageProps) => {
  const welcomeMessages = [
    { text: "स्वागत है", language: "Hindi" },
    { text: "Welcome", language: "English" },
    { text: "Bienvenido", language: "Spanish" },
    { text: "Bienvenue", language: "French" },
    { text: "Willkommen", language: "German" },
    { text: "ようこそ", language: "Japanese" },
    { text: "Benvenuto", language: "Italian" },
    { text: "환영합니다", language: "Korean" },
    { text: "Добро пожаловать", language: "Russian" }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState<'entering' | 'visible' | 'exiting'>('entering');
  
  useEffect(() => {
    const enterDuration = currentIndex === 0 ? 300 : 75; // Longer for first message
    const visibleDuration = currentIndex === 0 ? 800 : 100; // Longer pause for first
    const exitDuration = 75;
    
    let timer: number;
    
    if (animationState === 'entering') {
      timer = window.setTimeout(() => {
        setAnimationState('visible');
      }, enterDuration);
    } 
    else if (animationState === 'visible') {
      timer = window.setTimeout(() => {
        setAnimationState('exiting');
      }, visibleDuration);
    }
    else if (animationState === 'exiting') {
      timer = window.setTimeout(() => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < welcomeMessages.length) {
          setCurrentIndex(nextIndex);
          setAnimationState('entering');
        } else {
          onComplete();
        }
      }, exitDuration);
    }
    
    return () => {
      window.clearTimeout(timer);
    };
  }, [animationState, currentIndex, onComplete, welcomeMessages.length]);
  
  const skipAnimation = () => {
    onComplete();
  };
  
  // Animation classes based on state and index
  const getAnimationClasses = () => {
    if (currentIndex === 0) {
      switch(animationState) {
        case 'entering':
          return 'opacity-0 translate-y-20 blur-sm'; // Start further below
        case 'visible':
          return 'opacity-100 translate-y-0 blur-0';
        case 'exiting':
          return 'opacity-0 translate-y-0 blur-sm'; // Fade out without moving
        default:
          return '';
      }
    } else {
      switch(animationState) {
        case 'entering':
          return 'opacity-0 scale-95 blur-sm';
        case 'visible':
          return 'opacity-100 scale-100 blur-0';
        case 'exiting':
          return 'opacity-0 scale-105 blur-sm';
        default:
          return '';
      }
    }
  };
  
  return (
    <section className="flex items-center justify-center h-full w-full overflow-hidden">
      <div className="text-center px-6 relative">
        <div
          className={`transition-all duration-500 ease-out ${getAnimationClasses()}`}
          aria-live="polite"
          key={`${currentIndex}-${animationState}`}
        >
          <h1 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            {welcomeMessages[currentIndex].text}
          </h1>
          {/* <p className="text-white/60 text-lg">
            {welcomeMessages[currentIndex].language}
          </p> */}
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6">
        <Button
          variant="ghost"
          size="sm"
          className="text-white/50 hover:text-white hover:bg-white/10"
          onClick={skipAnimation}
        >
          Skip
        </Button>
      </div>
    </section>
  );
};

export default WelcomePage;