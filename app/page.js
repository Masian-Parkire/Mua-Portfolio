"use client";

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-white">
    
      <section className="bg-[url(/hero.jpg)]  bg-center h-screen bg-no-repeat bg-cover">
        <div
          className="w-full h-full
            bg-black/50 backdrop-brightness-75"
        >
          <Navbar />
          <Hero />
         
        </div>
      </section>
      <AboutMe />
    </main>
  );
}
