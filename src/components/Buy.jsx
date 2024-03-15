import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Buy() {
  const buyRef = useRef();
  const buyInView = useInView(buyRef, { amount: 0.4 });
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
    <section className="w-full mt-14 py-12 flex flex-col justify-start items-center gap-12 mb-6 bg-[#e5949e] sm:border-4 border-2 border-[#b96c76] rounded-lg">
      <p className="text-3xl text-white font-lilita md:text-7xl sm:text-5xl">
        How to Buy
      </p>
      <section
        className="md:w-[60%] sm:w-[90%] w-[95%] grid grid-cols-1 mx-auto sm:gap-4 gap-2 font-lilita md:text-3xl sm:text-2xl text-lg leading-none font-semibold text-[#b96c76] text-center capitalize overflow-x-hidden"
        ref={buyRef}
      >
        <motion.div
          className="md:w-[80%] w-[85%] py-2 bg-white rounded-lg border-4 border-[#b96c76] ml-auto"
          variants={rightAnimate}
          animate={buyInView ? "animate" : "initial"}
        >
          Download Solana DEX
        </motion.div>
        <motion.div
          className="md:w-[80%] w-[85%] py-2 bg-white rounded-lg border-4 border-[#b96c76]"
          variants={leftAnimate}
          animate={buyInView ? "animate" : "initial"}
        >
          Inject some sol
        </motion.div>
        <motion.div
          className="md:w-[80%] w-[85%] py-2 bg-white rounded-lg border-4 border-[#b96c76] ml-auto"
          variants={rightAnimate}
          animate={buyInView ? "animate" : "initial"}
        >
          Buy your $bepep
        </motion.div>
        <motion.div
          className="md:w-[80%] w-[85%] py-2 bg-white rounded-lg border-4 border-[#b96c76]"
          variants={leftAnimate}
          animate={buyInView ? "animate" : "initial"}
        >
          Import into your wallet
        </motion.div>
      </section>
    </section>
  );
}
