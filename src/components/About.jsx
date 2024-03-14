import { useRef } from "react";
import logo from "../assets/logo.webp";
import { motion, useInView } from "framer-motion";
export default function About() {
  const imageRef = useRef();
  const headingRef = useRef();
  const imageInView = useInView(imageRef, { amount: 0.5 });
  const headingInView = useInView(headingRef, { amount: 0.5 });
  const aboutInView = useInView(headingRef, { amount: 0.3 });
  const imageAnimate = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
  };
  const aboutAnimate = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const headingAnimate = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "circInOut",
      },
    },
  };
  return (
    <section className="mt-12 flex flex-col justify-start items-end gap-12 py-8 bg-[#e5949e] backdrop-blur-2xl md:px-4 px-1 rounded-xl sm:border-4 border-2 border-[#b96c76]">
      <section className="w-full overflow-hidden" ref={headingRef}>
        <motion.p
          className="w-full text-4xl font-normal text-left text-white font-lilita md:text-7xl sm:text-6xl"
          variants={headingAnimate}
          animate={headingInView ? "animate" : "initial"}
        >
          About Us
        </motion.p>
      </section>
      <section className="md:w-[600px] sm:w-[85%] w-[97%] h-auto bg-white rounded-3xl relative sm:border-4 border-2 border-[#b96c76] p-4 text-[#b96c76] font-cabinet about">
        <motion.p
          className="font-semibold leading-tight text -xl font-cabinet md:text-2xl"
          variants={aboutAnimate}
          animate={aboutInView ? "animate" : "initial"}
        >
          <span className="font-extrabold font-lilita">$BEPEP | Baby Epep</span>{" "}
          <br /> Missed out on $Epep? It's time to set your sights on a fresh
          opportunity. Say hello to $BabyEpep - Your second chance to get in
          early. $Babyepep is a movement of collective of like-minded
          individuals who believe in the power of bullish momentum and the
          thrill of trading. With $Babyepep, every transaction is an opportunity
          to make gains and be part of something bigger than ourselves.
        </motion.p>
        <div ref={imageRef}>
          <motion.img
            variants={imageAnimate}
            animate={imageInView ? "animate" : "initial"}
            src={logo}
            alt="logo"
            className="sm:w-24 w-16 object-contain absolute bottom-10 sm:-left-24 -left-16 -rotate-45 -z-10 bg-[#b96c76] rounded-full"
          />
          <motion.img
            variants={imageAnimate}
            animate={imageInView ? "animate" : "initial"}
            src={logo}
            alt="logo"
            className="sm:w-20 w-16 object-contain absolute sm:-top-[70px] -top-14 -right-2 rotate-12 -z-10 p-2 bg-[#b96c76] rounded-full"
          />
        </div>
      </section>
    </section>
  );
}
