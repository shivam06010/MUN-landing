import About from "@/components/About";
import Committees from "@/components/committees";
import Contact from "@/components/contact";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Committees />
      <Team />
      <Contact />
    </>
  );
}
