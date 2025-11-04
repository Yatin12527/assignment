import PropertySlider from "./ui/gallery";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col mt-15 sm:mt-25 p-5 sm:pl-30">
      {/* Hero Content */}
      <div className="w-full mb-12">
        <div className="sm:flex justify-around flex-col ">
          {/* Left: Heading */}
          <div>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight text-[#0A1F1A]">
              WELCOME TO
              <br />
              <i>L</i>UXORT
            </h1>
          </div>

          {/* Right: Description and Buttons */}
          <div className="space-y-6 md:pt-4">
            <p className="text-sm md:text-base leading-relaxed max-w-sm md:max-w-md mx-auto text-[0A1F1A]">
              Discover a world where luxury and comfort blend seamlessly,
              offering unforgettable experiences in a setting of elegance and
              tranquility.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-2.5 text-sm text-white font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: "#143F35" }}
              >
                BOOK YOUR STAY
              </button>

              <button
                className="px-6 py-2.5 text-sm font-medium border-2 transition-all hover:opacity-80"
                style={{
                  color: "#0A1F1A",
                  borderColor: "#0A1F1A",
                  backgroundColor: "transparent",
                }}
              >
                EXPLORE OUR SUITES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Property Slider */}
      <PropertySlider />
    </div>
  );
};

export default HeroSection;
