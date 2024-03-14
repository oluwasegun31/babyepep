import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Token() {
  const tokenRef = useRef();
  const tokenInView = useInView(tokenRef, { amount: 0.4 });
  const rightAnimate = {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  const leftAnimate = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  return (
    <section className="flex flex-col items-center justify-start w-full gap-12 mb-6 mt-14">
      <p className="text-3xl text-white font-lilita md:text-7xl sm:text-5xl">
        TOKENOMICS
      </p>
      <section
        className="md:w-[60%] sm:w-[90%] w-[95%] grid grid-cols-1 mx-auto sm:gap-4 gap-2 font-lilita md:text-4xl sm:text-3xl text-2xl leading-none font-semibold text-[#b96c76] text-center capitalize"
        ref={tokenRef}
      >
        <motion.div
          className="md:w-[80%] w-[85%] py-2 bg-white rounded-lg border-4 border-[#b96c76] ml-auto"
          variants={rightAnimate}
          animate={tokenInView ? "animate" : "initial"}
        >
          Total suply <br /> 1 billion
        </motion.div>
        <motion.div
          className="md:w-[80%] w-[85%] py-2 bg-white rounded-lg border-4 border-[#b96c76]"
          variants={leftAnimate}
          animate={tokenInView ? "animate" : "initial"}
        >
          Mint Revoked
        </motion.div>
        <motion.div
          className="md:w-[80%] w-[85%] py-2 bg-white rounded-lg border-4 border-[#b96c76] ml-auto"
          variants={rightAnimate}
          animate={tokenInView ? "animate" : "initial"}
        >
          Lp burned
        </motion.div>
      </section>
    </section>
  );
}
