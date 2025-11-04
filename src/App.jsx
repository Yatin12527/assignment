import AboutSection from "./components/aboutSection";
import AnnouncementBanner from "./components/AnnouncementBanner";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/highlightSection";
import FAQSection from "./components/faqSection";
import Navigation from "./components/Navigation";
import EventsSection from "./components/eventSection";
import TestimonialsSection from "./components/testimonialSection";
import PartnersSection from "./components/partners";
import NewsletterSection from "./components/newsLetter";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[#F6F4E9]">
      <Navigation />
      <AnnouncementBanner />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <EventsSection />
      <FAQSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
