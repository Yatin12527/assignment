import { useState } from "react";

const HighlightsSection = () => {
  const [activeTab, setActiveTab] = useState("pool");

  const tabs = [
    {
      value: "pool",
      label: "SWIMMING POOL",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600&q=80",
    },
    {
      value: "dining",
      label: "FINE DINING RESTAURANTS",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    },
    {
      value: "rooms",
      label: "LUXURY ROOMS & SUITES",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80",
    },
    {
      value: "spa",
      label: "SPA & WELLNESS",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.value === activeTab);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <p className=" text-lg tracking-widest uppercase text-muted-foreground font-cormorant text-[#143F35] ">
            HOTEL HIGHLIGHTS
          </p>
          <h2 className="font-extralight text-4xl lg:text-5xl text-[#0A1F1A]">
            Experience the Extraordinary
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#0A1F1A]">
            Experience elegance and comfort in our Luxury Rooms & Suites, where
            modern amenities and timeless design create the perfect retreat.
          </p>
        </div>

        <div className="w-full">
          {/* Tab Navigation */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`py-4 px-4 text-xs md:text-sm tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.value
                    ? "bg-white "
                    : "bg-transparent   hover:bg-neutral-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full">
            <div className="aspect-21/9 w-full overflow-hidden">
              <img
                src={activeTabData.image}
                alt={activeTabData.label}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
