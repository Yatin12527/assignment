import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Jerome Bell",
    location: "Israel",
    date: "9/21/19",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
  },
  {
    name: "Savannah Nguyen",
    location: "Poland",
    date: "9/18/23",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
  },
  {
    name: "Ronald Richards",
    location: "Guinea",
    date: "5/19/25",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
  },
  {
    name: "Courtney Henry",
    location: "Monaco",
    date: "1/15/20",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
  },
  {
    name: "Arlene McCoy",
    location: "Saint Barthelemy",
    date: "5/19/12",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
  },
  {
    name: "Eleanor Pena",
    location: "Sao Tome and Principe",
    date: "3/28/18",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-sm tracking-widest uppercase text-muted-foreground border-l-2 border-foreground pl-4 text-[#0A1F1A] font-cormorant">
              TESTIMONIALS
            </p>
            <h2 className="tracking-tight text-4xl lg:text-5xl">
              What Our Guests Say
            </h2>
            <p className="text-base leading-relaxed font-[#0A1F1A]">
              Exceptional Experiences, Shared by Those Who've Lived Them.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-sm tracking-wider">
              READ MORE TESTIMONIALS
            </Button>
          </div>

          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6 relative md:items-start">
            {/* Left Column - Scrolls Up */}
            <div className="relative overflow-hidden h-[800px] mask-gradient-vertical">
              <div className="animate-scroll-up space-y-6">
                {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed">{testimonial.review}</p>
                    <p className="text-xs text-gray-500">
                      {testimonial.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Scrolls Down */}
            <div className="relative overflow-hidden h-[800px] mask-gradient-vertical">
              <div className="animate-scroll-down space-y-6">
                {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed">{testimonial.review}</p>
                    <p className="text-xs text-gray-500">
                      {testimonial.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }
        
        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }
        
        .animate-scroll-up:hover,
        .animate-scroll-down:hover {
          animation-play-state: paused;
        }
        
        .mask-gradient-vertical {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;