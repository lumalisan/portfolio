import { About, Hero, Navbar } from "@/lib/components";

export default function Home() {
  return (
    <div className="relative z-0">
      <Navbar />

      <div id="intro">
        <Hero />
      </div>

      <div id="about" className="bg-purple">
        <About />
      </div>

      <div id="experience">
        {/* <Experience /> */}
      </div>

      <div id="projects">

      </div>

      <div id="contact" className="relative z-0">

      </div>
    </div>
  )
}
