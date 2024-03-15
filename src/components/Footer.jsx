import { useRef } from "react";
import baby from "../assets/babyepep.webp";
import { motion, useInView } from "framer-motion";
export default function Footer() {
  const imageRef = useRef();
  const imageInView = useInView(imageRef, { amount: 0.3 });
  const imageAnimate = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "circInOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <footer className="grid items-center justify-center w-full mt-12">
      <section className="relative overflow-x-hidden -z-10" ref={imageRef}>
        <p className="w-full font-lilita lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-white uppercase text-center absolute bottom-6 right-[50%] translate-x-[50%] mix-blend-difference">
          JOIN $BEPEP
        </p>
        <motion.img
          variants={imageAnimate}
          animate={imageInView ? "animate" : "initial"}
          src={baby}
          alt="babyepep"
          className="mx-auto sm:w-[500px] w-[300px] object-contain"
          width={500}
          height={500}
        />
      </section>
      <p className="text-white font-cabinet leading-normal md:w-[50%] sm:w-[80%] w-full text-center mx-auto md:text-2xl sm:text-xl text-lg font-semibold">
        Connect, collaborate, and thrive together. Your path to success with
        Babyepep begins now. Let's connect!
      </p>
    </footer>
  );
}
