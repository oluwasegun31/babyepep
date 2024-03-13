import bottle from "../assets/bottle.webp";
export default function Hero() {
  return (
    <section className="w-full h-[90vh] flex flex-col md:justify-between justify-end items-center gap-12 pt-16 font-boxing">
      <p className="font-bold uppercase text-white lg:text-8xl md:text-7xl sm:text-6xl text-4xl">
        $BABYEPEP
      </p>
      <img
        src={bottle}
        alt="bottle"
        className="w-[400px] object-contain mb-8"
      />
    </section>
  );
}
