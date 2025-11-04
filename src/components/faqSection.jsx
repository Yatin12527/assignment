import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordian";

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Our check-in time is from 3:00 PM & check-out is until 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    question: "Does the hotel offer airport transportation?",
    answer:
      "Yes, we offer complimentary airport shuttle service for our guests. Please contact our concierge 24 hours in advance to arrange your pickup.",
  },
  {
    question: "Does the hotel have dining options?",
    answer:
      "Luxort features three exceptional dining venues: our signature fine dining restaurant, a casual all-day café, and an elegant rooftop bar with panoramic views.",
  },
  {
    question: "Do you host weddings or special events?",
    answer:
      "Absolutely! Our dedicated events team specializes in creating unforgettable celebrations. We offer customizable packages for weddings, corporate events, and private gatherings.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm tracking-widest uppercase font-cormorant text-muted-foreground">
            FAQ
          </p>
          <h2 className="text-[#0A1F1A] text-4xl lg:text-5xl ">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white px-8 py-2 border-none"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
