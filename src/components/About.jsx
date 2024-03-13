import logo from "../assets/logo.webp";
export default function About() {
  return (
    <section className="mt-12 flex flex-col justify-start items-end gap-12 py-8 bg-[#e5949e] backdrop-blur-2xl md:px-4 px-1 rounded-xl sm:border-4 border-2 border-[#b96c76]">
      <p className="font-boxing md:text-7xl sm:text-5xl text-3xl text-white font-normal w-full text-left">
        About Us
      </p>
      <section className="md:w-[600px] sm:w-[85%] w-[90%] h-auto bg-white rounded-3xl relative border-4 border-[#b96c76] p-4 text-[#b96c76] font-cabinet about">
        <p className="font-cabinet font-semibold md:text-2xl sm:text-xl text-base leading-tight">
          Welcome to the Dark Side!!! <br />
          During the Long Night of Dips and Dumps, the Pepe team made a deal
          with the Devil to take over Pepe giving rise to The PEPE DEVIL |
          $PEPEDEV! The Pepe Devil invites you to explore the depths of meme
          culture with a devilish twist exploiting the sinfully unique Solana
          ecosystem while enjoying devilishly rewarding tokenomics. Join our
          community of mischief makers on Discord and Telegram to share dark
          humor memes and embrace your inner devil.
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
