'use client';

import CardSwap, { Card } from '../../src/blocks/Components/CardSwap/CardSwap.jsx';
import Image from 'next/image';

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
            I'm a <span className="text-[#f15a29]">selectively skilled</span> product<br />
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
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 relative overflow-hidden rounded-t-lg">
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source src="/marketing_tools/tool1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm">
                    <h3 className="text-[#f15a29] font-bold text-lg mb-2">AI/Automation</h3>
                    <p className="text-[#c6bba7] text-sm">Intelligent automation solutions to streamline your business processes</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 relative overflow-hidden rounded-t-lg">
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source src="/cardweb2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm">
                    <h3 className="text-[#f15a29] font-bold text-lg mb-2">Website Application</h3>
                    <p className="text-[#c6bba7] text-sm">Modern, responsive web applications built with cutting-edge technologies</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 relative overflow-hidden rounded-t-lg">
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source src="/smtpcard.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm">
                    <h3 className="text-[#f15a29] font-bold text-lg mb-2">SMTP Servers</h3>
                    <p className="text-[#c6bba7] text-sm">Reliable email infrastructure and delivery solutions for your business</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 relative overflow-hidden rounded-t-lg">
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source src="/marketing.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm">
                    <h3 className="text-[#f15a29] font-bold text-lg mb-2">Marketing Tools</h3>
                    <p className="text-[#c6bba7] text-sm">Powerful marketing automation and analytics tools to grow your business</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 relative overflow-hidden rounded-t-lg">
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source src="/agency.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm">
                    <h3 className="text-[#f15a29] font-bold text-lg mb-2">Agency Builder</h3>
                    <p className="text-[#c6bba7] text-sm">Complete solutions to build and scale your digital agency</p>
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
} 