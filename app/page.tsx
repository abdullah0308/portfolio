import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Performance from "@/components/sections/Performance";
import Archery from "@/components/sections/Archery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Work />
      <Performance />
      <Archery />
      <Contact />
    </>
  );
}
