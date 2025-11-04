import PropertySlider from "./ui/gallery";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-start  mt-15 sm:mt-25 p-5 sm:pl-30">
      <div className="max-w-7xl w-full grid md:grid-cols-[55%_45%] gap-12 md:gap-60 mb-15">
        <div className="space-y-8">
          <h1
            className="font-cormorant text-5xl md:text-7xl lg:text-[132px] leading-tight"
            style={{ color: "#0A1F1A" }}
          >
            <span className="whitespace-nowrap">WELCOME TO</span>
            <br />
            <span className="whitespace-nowrap">
              <i>L</i>UXORT
            </span>
          </h1>
        </div>
        <div className="space-y-8 mt-0 sm:mt-35">
          <p
            className="text-base md:text leading-relaxed"
            style={{ color: "#0A1F1A" }}
          >
            Discover a world where luxury and comfort blend seamlessly, offering
            unforgettable experiences in a setting of elegance and tranquility.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-3 text-white font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: "#143F35" }}
            >
              BOOK YOUR STAY
            </button>

            <button
              className="px-8 py-3 font-medium border-2 transition-all hover:opacity-80"
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
      <PropertySlider/>
    </div>
  );
};

export default HeroSection;
