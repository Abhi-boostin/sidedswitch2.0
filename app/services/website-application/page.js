'use client';

import Image from 'next/image';
import SmoothScroll from '../../components/SmoothScroll';

const profileImg = 'https://randomuser.me/api/portraits/women/44.jpg';

const reviews = [
  {
    name: 'Jane Doe',
    title: 'CEO, Example Corp',
    text: '“Working with this team was a fantastic experience. The website exceeded our expectations and the process was smooth from start to finish.”',
  },
  {
    name: 'John Smith',
    title: 'Founder, StartupX',
    text: '“Professional, creative, and always on time. Highly recommended for anyone looking to build a modern web presence.”',
  },
  {
    name: 'Alice Johnson',
    title: 'Marketing Lead, Brandify',
    text: '“Their attention to detail and understanding of our needs made all the difference. We loved the final product!”',
  },
];

export default function WebsiteApplicationPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen w-full bg-white text-black flex flex-col">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto py-16 px-4 gap-8 md:gap-0 items-center">
          {/* Left: Profile Image and Info */}
          <div className="flex-1 flex flex-col items-start justify-start md:pr-8">
            <span className="mb-2 text-gray-500 text-sm">About</span>
            <span className="mb-8 text-right w-full text-gray-500 text-sm hidden md:block">The vision of an agency,<br/>The passion of a creator.</span>
            <div className="w-full flex justify-center md:justify-start mb-8">
              <Image src={profileImg} alt="Profile" width={400} height={400} className="rounded-lg object-cover w-full max-w-xs md:max-w-sm" />
            </div>
          </div>
          {/* Right: Main Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">We believe the strongest ideas are born where creativity meets vision. That’s when design becomes a true driver of impact.</h1>
            <p className="mb-4 text-base md:text-lg">Hi, I’m Jane, a designer specializing in brand image and digital experiences. My passion is helping businesses stand out with innovative solutions and custom branding. With a Master’s in UX, I’ve worked with brands and entrepreneurs worldwide, delivering tools, strategy, and a strong visual universe for every project.</p>
            <p className="mb-8 text-base md:text-lg">Today, I bring my expertise and creativity to your digital ambitions. Let’s discover how we can bring your ideas to life and make a difference together.</p>
            <button className="border-b-2 border-black text-black font-semibold w-fit hover:opacity-80 transition mb-8">READ MY STORY</button>
          </div>
        </div>

        {/* Services Section */}
        <div className="w-full bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                <span className="text-4xl mb-4">💻</span>
                <h3 className="font-bold text-lg mb-2">Custom Website Design</h3>
                <p className="text-gray-600">Unique, responsive websites tailored to your brand and business goals.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                <span className="text-4xl mb-4">📱</span>
                <h3 className="font-bold text-lg mb-2">Web & Mobile Apps</h3>
                <p className="text-gray-600">Modern web and mobile applications with seamless user experiences.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                <span className="text-4xl mb-4">⚡</span>
                <h3 className="font-bold text-lg mb-2">Brand Strategy</h3>
                <p className="text-gray-600">Strategic branding and digital storytelling to elevate your business.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="w-full bg-white py-16 px-4">
          <h2 className="text-center text-2xl font-bold mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col">
                <div className="flex mb-2 text-yellow-400">{'★★★★★'}</div>
                <p className="mb-4 text-gray-700">{review.text}</p>
                <div className="font-bold text-black">{review.name}</div>
                <div className="text-sm text-gray-500">{review.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-16 px-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Ready to elevate your digital presence?</h2>
          <p className="text-white text-lg mb-8 text-center max-w-2xl">Let’s work together to create a website or app that inspires, engages, and grows your business. Contact us today for a free consultation and let’s build something amazing.</p>
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow hover:bg-blue-100 transition">Get Started</button>
        </div>
      </div>
    </SmoothScroll>
  );
} 