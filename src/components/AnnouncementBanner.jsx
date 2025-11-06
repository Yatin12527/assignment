const data = [
  {
    img: "/Sparkle.svg",
    content:
      "Exclusive Offer: Enjoy 20% Off Your First Stay – Limited Time Only! Book Now",
  },
];

const AnnouncementBanner = () => {
  return (
    <div className="bg-[#143F35] text-primary-foreground overflow-hidden text-[#F6F4E9] ">
      <div className="animate-marquee whitespace-nowrap py-3">
        <div className="inline-flex items-center gap-8">
          {[...data, ...data,...data,...data].map((res, index) => (
            <span
              className="flex items-center gap-2 text-sm tracking-wider"
              key={index}
            >
              <img src={res.img} className="w-4 h-4" />
              {res.content}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
