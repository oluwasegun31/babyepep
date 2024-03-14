import bottle from "../assets/bottle.webp";
import { motion } from "framer-motion";
export default function Hero() {
  const letterReveal = {
    hidden: {
      opacity: 0,
      y: 150,
      scale: 1.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 150,
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <section className="w-full h-[90vh] flex flex-col md:justify-center justify-end items-center gap-12 pt-16 font-lilita">
      <motion.p
        className="text-[54px] font-bold text-white uppercase lg:text-9xl md:text-8xl sm:text-7xl"
        variants={letterReveal}
        initial="hidden"
        animate="visible"
      >
        {"$BABYEPEP".split("").map((letter, i) => (
          <motion.span variants={letterReveal} key={i}>
            {letter}
          </motion.span>
        ))}
      </motion.p>

      <img
        src={bottle}
        alt="bottle"
        className="w-[400px] object-contain mb-8"
      />
    </section>
  );
}
