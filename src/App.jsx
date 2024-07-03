import NavBar from './components/ui/navbar';
import Hero from './components/homepage/Hero';
import About from './components/homepage/About';
import Role from './components/homepage/Role';
import Services from './components/homepage/Services';
import Works from './components/homepage/Works';
import Contact from './components/homepage/Contact';
import Footer from './components/homepage/Footer';

// import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';


function App() {
  const backRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (backRef.current) {
      gsap.to(backRef.current,
        {
          background: '#0E0E0C',
          duration: 1,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: backRef.current,
            start: 'top 100%',
            end: 'bottom bottom',
            scrub: 0.8,
          }
        }
      );
    }
  }, []); // Añadir un array de dependencias vacío para evitar múltiples ejecuciones

  return (
    <>
     
      <div className="w-full h-screen bg-fixed ">
        
        <NavBar />
        <main ref={backRef} className='px-5 md:px-10 xl:px-20 2xl:px-28'>
          <Hero />
          <Role />
          <About />
          <Services />
          <Works />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
