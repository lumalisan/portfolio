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

      <section id='intro' role='region' aria-label='Introduction'>
        <Hero />
      </section>

      <section id='about' role='region' aria-label='About section'>
        <About />
      </section>

      <section id='experience' role='region' aria-label='Experience section'>
        <Experience />
      </section>

      <section id='projects' role='region' aria-label='Projects section'>
        <Projects />
      </section>

      <section id='contact' role='region' aria-label='Contact section'>
        <Contact />
      </section>

      <Footer />
    </>
  );
}
