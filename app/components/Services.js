import FlowingMenu from '../../src/blocks/Components/FlowingMenu/FlowingMenu.jsx';

const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

export default function Services() {
  return (
    <div id="services" className="w-full h-screen flex items-center justify-center p-0 m-0">
      <div className="w-full h-[600px] relative">
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
} 