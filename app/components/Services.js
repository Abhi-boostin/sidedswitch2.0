import FlowingMenu from '../../src/blocks/Components/FlowingMenu/FlowingMenu.jsx';

const demoItems = [
  { link: '#', text: 'Website-Appllication', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'SMTP Servers', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Marketing Tools', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'AI / Automation', image: 'https://picsum.photos/600/400?random=4' },
  { link: '#', text: 'AGENCY BUILDER', image: 'https://picsum.photos/600/400?random=4' }
];

export default function Services() {
  return (
    <section id="services" className="w-full min-h-[400px] py-20 flex items-center justify-center bg-black">
      <div className="w-full max-w-7xl mx-auto min-h-[600px]">
        <FlowingMenu items={demoItems} itemHeight={120} />
      </div>
    </section>
  );
}   