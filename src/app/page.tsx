import ScrollProgress from "@/components/ScrollProgress";
import Navbar         from "@/components/Navbar";
import Hero           from "@/components/sections/Hero";
import About          from "@/components/sections/About";
import Projects       from "@/components/sections/Projects";
import Research       from "@/components/sections/Research";
import Notes          from "@/components/sections/Notes";
import Vlog           from "@/components/sections/Vlog";
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
        <Vlog />
        <Contact />
      </main>
    </>
  );
}
