import Features from "@/components/LandingPage/Features";
import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
