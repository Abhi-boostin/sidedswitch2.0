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
      <div className="w-[90vw] max-w-xl sm:w-[70vw] sm:max-w-2xl md:w-[60vw] md:max-w-4xl h-auto min-h-[60vh] bg-transparent flex flex-col items-center justify-center gap-4 relative z-10 p-4 sm:p-0">
        <SplitText
          text="SIDESWITCH"
          className="font-outfit tracking-[0.1em] text-[#e79600] text-[12vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] uppercase text-center drop-shadow-[0_4px_24px_rgba(231,150,0,0.25)]"
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
          hi this is minh, a product designer based in vietnam. i design products that are simple, intuitive, and delightful to use.fix
        </span>
      </div>
    </div>
  );
}