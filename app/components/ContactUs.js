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
    <section id="contact" className="w-full h-[50vh] flex items-center bg-black px-8 md:px-24">
      <div className="w-full flex flex-row items-center justify-between max-w-[1600px] mx-auto">
        {/* Center: Connect Links */}
        <div className="flex-1 flex flex-col items-center">
          <span className="tracking-[0.3em] text-[#c6bba7] text-sm font-darker-grotesque uppercase mb-8">connect</span>
          <div className="flex flex-row gap-24">
            <ul className="flex flex-col gap-2">
              {leftLinks.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#f15a29] text-2xl">&#x25B6;</span>
                  <a href={item.link} className="font-darker-grotesque text-[#c6bba7] text-3xl font-normal hover:text-[#f15a29] transition-colors">{item.text}</a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2">
              {rightLinks.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#f15a29] text-2xl">&#x25B6;</span>
                  <a href={item.link} className="font-darker-grotesque text-[#c6bba7] text-3xl font-normal hover:text-[#f15a29] transition-colors">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right: Contact Info */}
        <div className="flex flex-col items-end gap-2 min-w-[220px]">
          <div className="flex flex-row items-center gap-8">
            <div>
              <span className="block text-[#c6bba7] font-darker-grotesque text-lg mb-1">Email</span>
              <span className="block text-[#c6bba7] font-darker-grotesque text-base">minhpham.design@gmail.com</span>
            </div>
            <div className="ml-8">
              <span className="block text-[#c6bba7] font-darker-grotesque text-lg mb-1">Phone</span>
              <span className="block text-[#c6bba7] font-darker-grotesque text-base">+84 366 138 837</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 