import { About, Hero, Navbar } from "@/lib/components";

export default function Home() {
  return (
    <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-purple" id={'about'}>
          <About />
        </div>

        {/* <Projects /> */}

        {/* <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div> */}
      </div>
  )
}
