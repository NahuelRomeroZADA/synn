// import { useEffect, useRef } from "react";
// import { ScrollTrigger } from "gsap/all";
// import { gsap } from "gsap";
import Heading from "../ui/heading";
import profileImg from '../../assets/images/heroback.png'

export default function About() {
 
  return (
    // Try using max width to contain the size of the container
    <section  aria-label="about me">
      <Heading title="about me"/>
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 sm:p-8 2xl:p-20 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            src={profileImg}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            width="600"
            height="800"
            alt="Syn/sk.grimm art art"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10 text-secondary-200">
            <h3
              
              className="text-secondary-700 text-heading-3 2xl:text-7xl font-semibold leading-tight "
            >
              A brief intro, who am I?
            </h3>
            <p  className=" text-accent-400 font-Satoshi text-body-1 2xl:text-4xl ">
              I am an independent frontend developer, UI/UX designer and creator based in
              Melbourne, Australia.
              <br></br>
              <br></br>I specialize in crafting elevated, intuitive, and
              minimalistic designs for startups and small businesses to help
              them stand out in the digital landscape with a powerful impact. 😎
              <br></br>
              <br></br>
              When I am not developing or designing, I enjoy creating videos
              that talk about frontend development, productivity and design on{" "}
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}