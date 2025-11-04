const PartnersSection = () => {
  const logos = [
    "/Fictional company logo.svg",
    "/Fictional company logo (1).svg",
    "/Fictional company logo (1).png",
    "/Fictional company logo (2).png",
    "/Fictional company logo (3).png",
    "/Fictional company logo.png",
  ];

  // Duplicate to create a seamless marquee loop
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 w-full">
      <div className="w-full px-0">
        <p className="text-md text-[#0A1F1A] tracking-widest uppercase text-muted-foreground font-cormorant text-center mb-5">
          TRUSTED PARTNERS
        </p>
        <div className="w-full overflow-hidden">
          <div className="flex items-center animate-marquee">
            {marqueeLogos.map((src, idx) => (
              <img
                key={`${src}-${idx}`}
                src={src}
                alt="Partner logo"
                className="h-10 sm:h-14 md:h-16 w-auto object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
