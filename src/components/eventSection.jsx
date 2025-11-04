import React from "react";
import PropertySlider from "./ui/gallery";

const EventsSection = () => {
  return (
    <section className="py-10" id="events">
      <div className="min-h-screen flex flex-col items-start mt-15 sm:mt-25 px-5 sm:px-8 lg:px-12 max-w-full overflow-hidden">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-[55%_45%] gap-8 md:gap-12 lg:gap-16 mb-15">
          <div className="space-y-8">
            <p className="text-md tracking-tight uppercase border-l-2 border-black pl-4 font-cormorant text-[#143F35]">
              UNFORGETTABLE EVENTS AT LUXORT
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl leading-tight text-[#0A1F1A]">
              Celebrate Life's Finest Moments in Style and Elegance
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-[#0A1F1A]">
              At Luxort, we create extraordinary settings for unforgettable
              events. Whether you're planning an intimate gathering or a grand
              celebration.
            </p>
          </div>
        </div>
        {/* PropertySlider component would go here */}
        <div className="w-full p-6">
          <PropertySlider />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
