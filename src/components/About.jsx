import logo from "../assets/logo.webp";
export default function About() {
  return (
    <section className="mt-12 flex flex-col justify-start items-end gap-12 py-8 bg-[#e5949e] backdrop-blur-2xl md:px-4 px-1 rounded-xl sm:border-4 border-2 border-[#b96c76]">
      <p className="w-full text-3xl font-normal text-left text-white font-lilita md:text-7xl sm:text-5xl">
        About Us
      </p>
      <section className="md:w-[600px] sm:w-[85%] w-[90%] h-auto bg-white rounded-3xl relative border-4 border-[#b96c76] p-4 text-[#b96c76] font-cabinet about">
        <p className="text-base font-semibold leading-tight font-cabinet md:text-2xl sm:text-xl">
          <span className="font-extrabold font-lilita">$BEPEP | Baby Epep</span>{" "}
          <br /> Missed out on $Epep? It's time to set your sights on a fresh
          opportunity. Say hello to $BabyEpep - Your second chance to get in
          early. $Babyepep is a movement of collective of like-minded
          individuals who believe in the power of bullish momentum and the
          thrill of trading. With $Babyepep, every transaction is an opportunity
          to make gains and be part of something bigger than ourselves.
        </p>
        <img
          src={logo}
          alt="logo"
          className="sm:w-24 w-16 object-contain absolute bottom-10 sm:-left-24 -left-16 -rotate-45 -z-10 bg-[#b96c76] rounded-full"
        />
        <img
          src={logo}
          alt="logo"
          className="sm:w-20 w-16 object-contain absolute sm:-top-[70px] -top-14 -right-2 rotate-12 -z-10 p-2 bg-[#b96c76] rounded-full"
        />
      </section>
    </section>
  );
}
