import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Remaining sections: About, Projects, Research, Notes, Contact — coming next */}
      </main>
    </>
  );
}
