'use client';

const leftLinks = [
  { text: 'Dribbble', link: '#' },
  { text: 'Youtube', link: '#' },
  { text: 'Linkedin', link: '#' },
];
const rightLinks = [
  { text: 'Instagram', link: '#' },
  { text: 'Facebook', link: '#' },
  { text: 'Behance', link: '#' },
];

export default function ContactUs() {
  return (
    <section id="contact" className="w-full h-auto min-h-[40vh] flex items-center bg-black px-4 sm:px-8 md:px-24 py-8">
      <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-between max-w-[1600px] mx-auto gap-8 md:gap-0">
        {/* Center: Connect Links */}
        <div className="flex-1 flex flex-col items-center mb-8 md:mb-0 w-full">
          <span className="tracking-[0.3em] text-[#c6bba7] text-xs sm:text-sm font-darker-grotesque uppercase mb-6">connect</span>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 w-full justify-center">
            <ul className="flex flex-col gap-2 items-center sm:items-start">
              {leftLinks.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#f15a29] text-xl sm:text-2xl">&#x25B6;</span>
                  <a href={item.link} className="font-darker-grotesque text-[#c6bba7] text-xl sm:text-3xl font-normal hover:text-[#f15a29] transition-colors">{item.text}</a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2 items-center sm:items-start">
              {rightLinks.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#f15a29] text-xl sm:text-2xl">&#x25B6;</span>
                  <a href={item.link} className="font-darker-grotesque text-[#c6bba7] text-xl sm:text-3xl font-normal hover:text-[#f15a29] transition-colors">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right: Contact Info */}
        <div className="flex flex-col items-center md:items-end gap-2 min-w-[180px] w-full md:w-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full justify-center md:justify-end">
            <div>
              <span className="block text-[#c6bba7] font-darker-grotesque text-base sm:text-lg mb-1">Email</span>
              <span className="block text-[#c6bba7] font-darker-grotesque text-sm sm:text-base">minhpham.design@gmail.com</span>
            </div>
            <div className="sm:ml-8 mt-4 sm:mt-0">
              <span className="block text-[#c6bba7] font-darker-grotesque text-base sm:text-lg mb-1">Phone</span>
              <span className="block text-[#c6bba7] font-darker-grotesque text-sm sm:text-base">+84 366 138 837</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 