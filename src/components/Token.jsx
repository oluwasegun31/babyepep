export default function Token() {
  return (
    <section className="flex flex-col items-center justify-start w-full gap-12 mb-6 mt-14">
      <p className="text-3xl text-white font-lilita md:text-7xl sm:text-5xl">
        TOKENOMICS
      </p>
      <section className="md:w-[60%] sm:w-[90%] w-[95%] grid grid-cols-1 mx-auto sm:gap-4 gap-2 font-cabinet md:text-3xl sm:text-2xl text-lg leading-none font-semibold text-[#b96c76] text-center capitalize">
        <div className="md:w-[80%] w-[85%] py-2 bg-white rounded-lg border-4 border-[#b96c76] ml-auto">
          Total suply <br /> 1 billion
        </div>
        <div className="md:w-[80%] w-[85%] py-2 bg-white rounded-lg border-4 border-[#b96c76]">
          Mint Revoked
        </div>
        <div className="md:w-[80%] w-[85%] py-2 bg-white rounded-lg border-4 border-[#b96c76] ml-auto">
          Lp burned
        </div>
      </section>
    </section>
  );
}
