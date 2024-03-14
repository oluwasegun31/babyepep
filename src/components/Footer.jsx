import baby from "../assets/babyepep.webp";
export default function Footer() {
  return (
    <footer className="grid items-center justify-center w-full mt-12">
      <section className="relative -z-10">
        <p className="w-full font-lilita lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-white uppercase text-center absolute bottom-6 right-[50%] translate-x-[50%] mix-blend-difference">
          JOIN $BEPEP
        </p>
        <img
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
