'use client';

import SplitText from "../../src/blocks/TextAnimations/SplitText/SplitText.jsx";
import Beams from '../../src/blocks/Backgrounds/Beams/Beams.jsx';

export default function HeroSection() {
  return (
    <div id="hero" className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Beams background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      {/* Centered company name and motto */}
      <div className="w-full flex flex-col items-center justify-center gap-4 relative z-10 p-4 sm:p-0">
        <SplitText
          text="SIDESWITCH"
          className="font-outfit tracking-[0.1em] text-[#e79600] text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] uppercase text-center drop-shadow-[0_4px_24px_rgba(231,150,0,0.25)] whitespace-nowrap"
          delay={60}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        {/* Motto goes here */}
        <span className="mt-4 text-[#c6bba7] text-base sm:text-lg md:text-xl font-darker-grotesque text-center" style={{ fontWeight: 'normal' }}>
          {/* Add your motto here */}
          "We deliver digital experiences that inspire and empower. At SIDESWITCH, our agency is dedicated to transforming ideas into impactful products—crafted with precision, creativity, and a relentless focus on your success. Let us help you stand out, connect, and grow in a world that never stops evolving."
        </span>
      </div>
    </div>
  );
}