import Link from 'next/link';
import TiltedCard from '../../src/blocks/Components/TiltedCard/TiltedCard.jsx';

const cards = [
  {
    name: 'Website & App Development',
    route: '/services/website-application',
    imageSrc: 'https://picsum.photos/400/400?random=1',
  },
  {
    name: 'SMTP Servers',
    route: '/services/smtp-servers',
    imageSrc: 'https://picsum.photos/400/400?random=2',
  },
  {
    name: 'Marketing Tools',
    route: '/services/marketing-tools',
    imageSrc: 'https://picsum.photos/400/400?random=3',
  },
  {
    name: 'AI / Automation',
    route: '/services/ai-automation',
    imageSrc: 'https://picsum.photos/400/400?random=4',
  },
  {
    name: 'Agency Builder',
    route: '/services/agency-builder',
    imageSrc: 'https://picsum.photos/400/400?random=5',
  },
];

export default function Services() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black px-4 py-12">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="flex justify-center items-center w-full">
              <Link href={card.route} className="w-full flex justify-center items-center">
                <TiltedCard
                  imageSrc={card.imageSrc}
                  altText={card.name}
                  containerHeight="clamp(140px,24vw,220px)"
                  containerWidth="100%"
                  imageHeight="clamp(140px,24vw,220px)"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                  fixedTopOverlayContent={card.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}   