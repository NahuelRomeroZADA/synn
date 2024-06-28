import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import heroImg from "../../assets/images/heroback3.png";



const Hero = () => {
    
    useGSAP (() => {
        gsap.from("#titlehero", {
            opacity: 0,
            y: 150,
            repeat: 0,
            duration: 1.5,
            ease: 'power4.inOut',
        })
    }, [])

    useGSAP (() => {
        gsap.from("#heroImg", {
            opacity: 0,
            scale: 4,
            repeat: 0,
            duration: 2,
            ease: 'power2.inOut',
        })
    }, [])



  return (
    <section data-scroll data-scroll-section data-scroll-speed="-.3" 
        id="hero" 
        className="hero relative flex w-full h-screen select-none items-center justify-center 
        "
        aria-label="hero">
        <div className="z-10 flex flex-col w-full items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold uppercase text-accent-300 ">
            <div className="title 2xl:py-16 ">
                <h1 id="titlehero" className=" overflow-visible font-general">Hey, i&apos;m syn</h1>
            </div>
            <div className="title 2xl:py-16">
                <h1 id="titlehero"className=" font-outline-3 md:font-outline-4  overflow-visible font-general text-transparent ">Hey, i&apos;m syn</h1>
            </div>
            <div className="title 2xl:py-16">
                <h1 id="titlehero" className="font-general">Hey, i&apos;m syn</h1>
            </div>
        </div>
        <div 
            className="absolute mx-auto w-[55%] overflow-hidden rounded-md"
        >
            <img id="heroImg"  
                className="scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto"
                src={heroImg}
                alt="HeroImg"
            />
        </div>
        
    </section>
  )
}

export default Hero
