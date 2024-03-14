import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <section className="grid w-full h-screen px-4 text-center place-content-center font-lilita">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "circInOut", duration: 1 }}
        className="mb-6 text-4xl font-bold leading-none text-white uppercase md:text-6xl"
      >
        Welcome to $babyepep
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
        className="bg-[#f58594] w-fit mx-auto text-white px-8 py-2 md:text-4xl text-2xl rounded-lg border-2 uppercase font-bold border-black"
        onClick={() => navigate("/home")}
      >
        Continue
      </motion.button>
    </section>
  );
}
