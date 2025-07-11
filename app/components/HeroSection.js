'use client';

import SplitText from "../../src/blocks/TextAnimations/SplitText/SplitText.jsx";

export default function HeroSection() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[60vw] h-[70vh] bg-blue-900/60 rounded-xl shadow-2xl flex items-center justify-center">
        <SplitText
          text="Hello, GSAP!"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </div>
  );
} 