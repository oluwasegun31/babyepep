import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-screen grid place-content-center font-mono text-center px-4">
      <p className="uppercase md:text-6xl text-4xl font-bold text-white leading-none mb-6">
        Welcome to $babyepep
      </p>
      <button
        className="bg-[#f58594] w-fit mx-auto text-white px-8 py-2 md:text-4xl text-2xl rounded-lg border-2 uppercase font-bold border-black"
        onClick={() => navigate("/home")}
      >
        Continue
      </button>
    </section>
  );
}
