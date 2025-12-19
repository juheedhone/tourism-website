const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img className="w-full  object-cover" src="./hawa.jpg" alt="hawa" />

      {/* Text on top of Image */}
      <div className="absolute inset-0 flex flex-col items-center justify-top  text-[#355C7D]">
        {/* <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mt-6">
          Hawa Mahal
        </h1> */}
      </div>
    </div>
  );
};

export default HeroSection;
