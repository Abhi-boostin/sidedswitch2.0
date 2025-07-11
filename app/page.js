import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import SmoothScroll from './components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main >
        <HeroSection />
        <AboutMe />
        <Services />
        <ContactUs />
      </main>
    </SmoothScroll>
  );
}
