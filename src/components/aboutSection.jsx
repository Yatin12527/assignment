import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "COMFY AREA",
      mainImage:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
      sideImage:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    },
    {
      id: 2,
      title: "ELEGANT SPACE",
      mainImage:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      sideImage:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    },
    {
      id: 3,
      title: "MODERN DESIGN",
      mainImage:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      sideImage:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full min-h-screen py-16 px-8 lg:px-16" id="about">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            {/* About Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-px h-16 bg-[#143F35]"></div>
                <h3 className="font-[Cormorant] text-base tracking-wider  text-[#143F35] uppercase">
                  About Luxort
                </h3>
              </div>
            </div>

            {/* Main Text */}
            <div>
              <p className="text-xl lg:text-2xl leading-[1.2] text-[#0A1F1A] mb-8 font-extralight">
                Luxort is where elegance meets comfort, creating unforgettable
                moments with every stay. Welcome to your perfect escape.
              </p>

              {/* Founder Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-400 shrink-0"></div>
                <div>
                  <p className="text-[#0A1F1A] font-medium text-lg">
                    Roberto Pollye
                  </p>
                  <p className="text-[#0A1F1A]/60 text-sm">Founder of Luxort</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Hero Text */}
            <div className="mb-12">
              <h1 className="text-[35px] lg:text-[40px] text-[#0A1F1A] font-extralight mb-6">
                Where Timeless Elegance Meets Exceptional Comfort and
                Unforgettable Experiences in Luxury Hospitality
              </h1>
              <p className="text-[#0A1F1A]/70 text-base leading-relaxed max-w-2xl">
                At Luxort, we redefine the meaning of luxury hospitality, our
                hotel offers a seamless blend of classic sophistication and
                modern comfort, providing guests with an unparalleled
                experience.
              </p>
            </div>

            {/* Image Slider */}
            <div className="flex-1 flex flex-col">
              {/* Images */}
              <div className="flex gap-4">
                <div className="flex-3 h-80 lg:h-[400px] bg-gray-300 rounded overflow-hidden">
                  <img
                    src={slides[currentIndex].mainImage}
                    alt={slides[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-2 h-80 lg:h-[400px] bg-gray-500 rounded overflow-hidden">
                  <img
                    src={slides[currentIndex].sideImage}
                    alt="Side view"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between bg-white p-4 ">
                <div className="flex items-center gap-8">
                  <span className="text-lg text-[#0A1F1A]">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm tracking-[0.2em] text-[#0A1F1A] uppercase">
                    {slides[currentIndex].title}
                  </span>
                </div>
                <button
                  className="flex items-center gap-2 text-[#0A1F1A] hover:text-[#0A1F1A]/70 transition-colors group"
                  onClick={handleNext}
                >
                  <span className="text-sm tracking-[0.2em] uppercase">
                    Next
                  </span>
                  <FaChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Progress Dots and Arrows */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 flex items-center justify-center text-[#0A1F1A] hover:bg-[#0A1F1A]/5 rounded transition-colors"
                >
                  <FaChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-0.5 transition-all duration-300 ${
                        index === currentIndex
                          ? "w-12 bg-[#0A1F1A]"
                          : "w-8 bg-[#0A1F1A]/30 hover:bg-[#0A1F1A]/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-10 h-10 flex items-center justify-center text-[#0A1F1A] hover:bg-[#0A1F1A]/5 rounded transition-colors"
                >
                  <FaChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
