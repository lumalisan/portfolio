import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
  Footer,
} from '@/lib/components';

export default function Home() {
  return (
    <>
      <Navbar />

      <div id='intro'>
        <Hero />
      </div>

      <div id='about'>
        <About />
      </div>

      <div id='experience'>
        <Experience />
      </div>

      <div id='projects'>
        <Projects />
      </div>

      <div id='contact'>
        <Contact />
      </div>

      <Footer />
    </>
  );
}
