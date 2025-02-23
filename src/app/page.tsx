import Footer from '@/components/landing-page/Footer';
import Header from '@/components/landing-page/Header';
import Hero from '@/components/landing-page/Hero';
import Portability from '@/components/landing-page/Portability';

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Portability />
      <Footer />
    </div>
  );
}
