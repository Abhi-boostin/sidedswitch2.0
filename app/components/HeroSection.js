'use client';

import SplitText from "../../src/blocks/TextAnimations/SplitText/SplitText.jsx";

export default function HeroSection() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const lines = [
    { text: "MAKING", className: "text-[#c6bba7]" },
    { text: "GOOD", className: "text-[#f15a29]" },
    { text: "SHIT", className: "text-[#f15a29]" },
    { text: "SINCE", className: "text-[#c6bba7]" },
    { text: "2009", className: "text-[#c6bba7]" },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@790&family=Gabarito:wght@606&family=Michroma&display=swap');`}</style>
      <div className="w-[60vw] h-[70vh] bg-transparent flex flex-col items-center justify-center gap-1">
        {/* Company name and line */}
        <div className="flex flex-col items-center mb-4 hero_content_inner js-cursor-extend">
          <div className="flex items-center justify-center">
            <span className="block w-10 h-0.5 bg-[#3d3935] mr-4 rounded-full" />
            <span className="tracking-[0.4em] text-[#3d3935] text-lg font-darker-grotesque" style={{ fontWeight: 'normal' }}>
              MINH PHAM
            </span>
          </div>
        </div>
        {/* Main hero text */}
        {lines.map((line, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <SplitText
              text={line.text}
              className={`font-darker-grotesque uppercase text-[6vw] leading-[0.95] text-center ${line.className}`}
              delay={60}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
              style={{ fontWeight: 'normal' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 