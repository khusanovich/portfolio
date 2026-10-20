import ScrollProgress from "@/components/ScrollProgress";
import Navbar         from "@/components/Navbar";
import Hero           from "@/components/sections/Hero";
import About          from "@/components/sections/About";
import Projects       from "@/components/sections/Projects";
import Services       from "@/components/sections/Services";
import LearningHub    from "@/components/sections/LearningHub";
import Contact        from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <LearningHub />
        <Contact />
      </main>
    </>
  );
}
