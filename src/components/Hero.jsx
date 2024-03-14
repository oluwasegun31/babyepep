import bottle from "../assets/bottle.webp";
export default function Hero() {
  return (
    <section className="w-full h-[90vh] flex flex-col md:justify-center justify-end items-center gap-12 pt-16 font-lilita">
      <p className="text-[54px] font-bold text-white uppercase lg:text-9xl md:text-8xl sm:text-7xl">
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
