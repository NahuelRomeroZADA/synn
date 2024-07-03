import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Role() {
  const h1Ref = useRef(null);
  const secRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (h1Ref.current) {
      gsap.fromTo(h1Ref.current, 
        {
          opacity: 0,
          y: 100, // Posición inicial para que el texto suba 50px desde su posición original
        }, 
        {
          opacity: 1,
          y: 0, // Animar a su posición natural
          duration: 1,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: h1Ref.current,
            start: 'top bottom', // El inicio de la animación cuando la parte inferior de la pantalla toca la parte superior del h1
            end: 'top top', // Fin de la animación cuando la parte superior del h1 toca la parte superior de la pantalla
            scrub: 0.5, // Scrub suave para sincronizar con el scroll, ajusta el valor para suavizar más o menos
             // Útil para depuración, puedes eliminarlo en producción
          }
        }
      );
    }
    // if (secRef.current){
    //   gsap.to(secRef.current,
    //     {
    //       background:'#0E0E0C',
    //       duration: 2,
    //       ease: 'power4.inOut',
    //       scrollTrigger: {
    //         trigger: secRef.current,
    //         start: 'top bottom',
    //         end: 'top top',
    //         scrub: 0.5,
    //       }
    //     }
    //   )
    // }

  }, []);
  
  
  return (
      <section ref={secRef} id="about" className=" select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change" aria-label="">
        <div className="flex w-full items-center space-x-20">
          <h1 ref={h1Ref} className=" text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
          I create elevating digital experiences that inspire and connect with people through development and design.
          </h1>
        </div>
      </section>
    );
  }