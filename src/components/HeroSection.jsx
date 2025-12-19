const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img className="w-full  object-cover" src="./hawa.jpg" alt="hawa" />

      {/* Text on top of Image */}
      <div className="absolute inset-0 flex flex-col items-center justify-top  text-orange-700">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mt-6">
          Hawa Mahal
        </h1>
        <p className="text-lg md:text-2xl mt-3 drop-shadow-lg">
          Discover the Pink City like never before
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
