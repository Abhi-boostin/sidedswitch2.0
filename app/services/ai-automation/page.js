'use client';

import Image from 'next/image';

const profileImg = 'https://randomuser.me/api/portraits/men/85.jpg';

const reviews = [
  {
    name: 'Olivia Chen',
    title: 'COO, AutomateNow',
    text: '“Their AI solutions streamlined our workflow and saved us countless hours. The automation is seamless!”',
  },
  {
    name: 'Liam Patel',
    title: 'Tech Lead, SmartOps',
    text: '“Impressive expertise in AI and automation. We saw immediate improvements in efficiency.”',
  },
  {
    name: 'Sophia Garcia',
    title: 'Founder, NextGen AI',
    text: '“A reliable partner for any business looking to leverage artificial intelligence.”',
  },
];

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black flex flex-col">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto py-12 px-4 gap-8 md:gap-0">
        {/* Left: Profile Image and Info */}
        <div className="flex-1 flex flex-col items-start justify-start md:pr-8">
          <span className="mb-2 text-gray-500 text-sm">A propos</span>
          <span className="mb-8 text-right w-full text-gray-500 text-sm hidden md:block">La vision d’une agence,<br/>La passion d’une freelance.</span>
          <div className="w-full flex justify-center md:justify-start mb-8">
            <Image src={profileImg} alt="Profile" width={400} height={400} className="rounded-lg object-cover w-full max-w-xs md:max-w-sm" />
          </div>
        </div>
        {/* Right: Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">L’intelligence artificielle au service de votre performance.</h1>
          <p className="mb-4 text-base md:text-lg">Nous développons des solutions d’automatisation et d’IA sur-mesure pour optimiser vos processus et accélérer votre croissance. Profitez d’une expertise pointue pour transformer vos défis en opportunités.</p>
          <p className="mb-8 text-base md:text-lg">Contactez-nous pour découvrir comment l’IA peut révolutionner votre activité et vous faire gagner un temps précieux.</p>
          <button className="border-b-2 border-black text-black font-semibold w-fit hover:opacity-80 transition mb-8">LIRE MON HISTOIRE</button>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="w-full bg-gray-50 py-12 px-4">
        <h2 className="text-center text-2xl font-bold mb-8">Avis Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col">
              <div className="flex mb-2 text-yellow-400">{'★★★★★'}</div>
              <p className="mb-4 text-gray-700">{review.text}</p>
              <div className="font-bold text-black">{review.name}</div>
              <div className="text-sm text-gray-500">{review.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 