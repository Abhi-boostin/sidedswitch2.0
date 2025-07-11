'use client';

import CardSwap, { Card } from '../../src/blocks/Components/CardSwap/CardSwap.jsx';

export default function AboutMe() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center bg-black px-4 sm:px-8 md:px-24">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[220px] w-full">
          {/* Section label */}
          <div className="mb-8">
            <span className="tracking-[0.3em] text-[#c6bba7] text-xs sm:text-sm font-darker-grotesque uppercase">about me</span>
          </div>
          {/* Main headline */}
          <h1 className="font-darker-grotesque text-[#c6bba7] text-[8vw] sm:text-[5vw] md:text-[3vw] leading-[1.08] font-normal text-left">
            I’m a <span className="text-[#f15a29]">selectively skilled</span> product<br />
            designer with strong focus on<br />
            producing high quality &<br />
            impactful digital experience.
          </h1>
        </div>
        {/* Right: CardSwap */}
        <div className="flex-1 flex items-center justify-center min-w-[200px] w-full">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg" style={{ height: '400px', position: 'relative' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <h3>Card 1</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>Card 2</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>Card 3</h3>
                <p>Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
} 