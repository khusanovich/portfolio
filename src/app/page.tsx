import ScrollProgress from "@/components/ScrollProgress";
import Navbar         from "@/components/Navbar";
import Hero           from "@/components/sections/Hero";
import About          from "@/components/sections/About";
import Projects       from "@/components/sections/Projects";
import Research       from "@/components/sections/Research";
import Notes          from "@/components/sections/Notes";
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
        <Research />
        <Notes />
        <LearningHub />
        <Contact />
      </main>
    </>
  );
}
