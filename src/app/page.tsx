import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Remaining sections: Projects, Research, Notes, Contact — coming next */}
      </main>
    </>
  );
}
