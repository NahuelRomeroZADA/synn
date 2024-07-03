import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LinesAnimation = () => {
  const linesContainerRef = useRef(null);

  useEffect(() => {
    // Registrar el plugin de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Configurar animación con GSAP
    if (linesContainerRef.current) {
      const lines = linesContainerRef.current.children;
      const tl = gsap.timeline({ repeat: -1 });

      // Animación para girar las líneas de abajo hacia arriba
      tl.fromTo(
        lines,
        { y: '100%' },
        {
          y: '-100%',
          duration: 3,
          ease: 'none',
          stagger: {
            amount: 0.5,
            repeat: -1,
            yoyo: true,
          },
        }
      );
    }

    // Configuración de ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: linesContainerRef.current,
      start: 'top 100%',
      end: 'bottom bottom',
      scrub: 0.8,
      onUpdate: (self) => {
        if (self.isActive) {
          document.body.style.overflowY = 'hidden'; // Deshabilitar scroll
        } else {
          document.body.style.overflowY = 'auto'; // Habilitar scroll
        }
      },
    });

    // Limpiar ScrollTrigger al desmontar el componente
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div ref={linesContainerRef} className="absolute inset-0 overflow-hidden">
      {/* Generación de líneas */}
      {[...Array(100).keys()].map((index) => (
        <div key={index} className="absolute w-full h-px bg-[#8C8C73] opacity-0.1" style={{ top: `${index * 2}%` }} />
      ))}
    </div>
  );
};

export default LinesAnimation;
